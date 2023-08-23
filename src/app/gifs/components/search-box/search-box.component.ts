import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent {
  @ViewChild('tagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private readonly _gifsService: GifsService) {}

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;

    this._gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
