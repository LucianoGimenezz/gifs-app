import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import type { Gifs, Data as Gif } from '../interfaces/gifs-response.interface';

const LOCALSTORAGE_KEY_HISTORY = 'history'

@Injectable({
  providedIn: 'root'
})
export class GifsService{
  private gifs!: Gif[]
  private api_base: string = 'https://api.giphy.com/v1/gifs'
  private _tagsHistory: Set<string> = new Set()

  constructor(
    private readonly _http: HttpClient
  ) { }

  get  getGifs() {
    return this.gifs
  }

  get tagsHistory() {
    const historyTags: string[] = JSON.parse(
        localStorage.getItem(LOCALSTORAGE_KEY_HISTORY) ?? '[]')

    this._tagsHistory = new Set(historyTags)
    return historyTags
  }

  public getLatestGif() {
     const latestTag = Array.from(this._tagsHistory)[0]
     this.searchTag(latestTag)

  }

  public searchTag( tag: string) {

    let tagToLower = tag.toLowerCase().trim()

    if (!tagToLower) return

    let tags = Array.from(this._tagsHistory).slice(0, 9)
    tags.unshift(tagToLower)

    this._tagsHistory = new Set(tags)

    localStorage.setItem(
        LOCALSTORAGE_KEY_HISTORY,
        JSON.stringify(Array.from(this._tagsHistory)))

    const params = new HttpParams()
          .set('api_key', GIPHY_API_KEY)
          .set('q', tag)
          .set('limit', '10')

    this._http.get<Gifs>(`${this.api_base}/search`, { params })
      .subscribe(res => {
        this.gifs = res.data
      })
  }
}
