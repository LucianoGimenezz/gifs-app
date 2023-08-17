import { Component, Input, OnInit } from '@angular/core';
import { Data as Gifs } from '../../interfaces/gifs-response.interface'
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit{
  @Input()
  public gifs: Gifs[] = []

  constructor(
    private readonly _gifService: GifsService
  ){}


  ngOnInit(): void {
    this._gifService.getLatestGif()
  }
}
