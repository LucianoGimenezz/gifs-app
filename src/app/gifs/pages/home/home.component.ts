import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   constructor(
    private readonly _gifsService: GifsService
   ){}

   get gifs() {
    return this._gifsService.getGifs
   }
}
