import { Component, OnInit } from '@angular/core';
import { CatImage } from './img-card-model';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})

export class ImgCardComponent implements OnInit {
  public image: CatImage = {
    message: 'Progressive Web Cat',
    api: 'https://cataas.com/cat/says/',
    fontsize: 20
  };
  public src: string;
  constructor() { }

  ngOnInit() {
    this.generateSrc();
  }

  generateSrc(): void {
    this.src = this.image.api + this.image.message + '?size=' + this.image.fontsize + '&ts=' + Date.now();
    console.log(this.src)
  }



}
