import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(
    private readonly _gifsService: GifsService
  ) {}


  get gifsHistory() {
    return this._gifsService.tagsHistory
  }

  reSearchTag(tag: string) {
    this._gifsService.searchTag(tag)
  }
}
