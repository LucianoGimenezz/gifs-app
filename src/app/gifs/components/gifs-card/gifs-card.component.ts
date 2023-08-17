import { Component, Input, OnInit } from '@angular/core';
import { Data as Gif } from '../../interfaces/gifs-response.interface'

@Component({
  selector: 'gifs-card-item',
  templateUrl: './gifs-card.component.html',
  styleUrls: ['./gifs-card.component.css']
})
export class GifsCardComponent implements OnInit {

  @Input()
  public gif!: Gif

  ngOnInit(): void {
    console.log(this.gif)
    if (!this.gif) throw new Error('Gif property is required')
  }
}
