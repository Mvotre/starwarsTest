import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  // ícones 
  faArrowAltCircleLeft = faArrowAltCircleLeft
  faArrowAltCircleRight = faArrowAltCircleRight

  // Variáveis
  arrayT = []
  firstPage:String = 'https://swapi.co/api/people'
  nextPage:String = ''
  prevPage:String = ''
  nextPossible:Boolean = true
  prevPossible:Boolean = true
  loading:Boolean = true

  constructor(public httpClient: HttpClient) { }

  ngOnInit(): void {
    // Carrega os elementos da primeira página logo na inicialização do componente
    this.getPeople(this.firstPage);
  }

  // Método para buscar personagens
  getPeople(url:String){
    this.httpClient.get(`${url}`).subscribe((res:any)=>{
      this.loading = false;
      this.prevPage = res.previous; 
      this.nextPage =  res.next;
      this.arrayT = res.results;

      // Faz a busca de imagens de cada personagem
      for( let i=0; i<this.arrayT.length; i++){
        this.httpClient.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyDs_wed8UHbuUQpQGbwEdIdBi3WqXHZxMs&cx=005463450859308563494:pee2n3afu0c&q=${this.arrayT[i].name}&searchType=image&imgSize=large`).subscribe((res:any)=>{
          this.arrayT[i].imagem = res.items[0].link
        });
      }

      // Habilita/desabilita os botões de Próximo e Anterior
      if(this.prevPage) {
        this.prevPossible = true
      } else {
        this.prevPossible = false
      } 

      if(this.nextPage) {
        this.nextPossible = true
      } else {
        this.nextPossible = false
      } 
    });
  }

  // Método para próxima página
  getNext() {
    this.getPeople(this.nextPage)
    this.loading = true;
  }

  // Método para página anterior
  getPrev() {
    this.getPeople(this.prevPage)
    this.loading = true;
  }
}
