import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { userInfo } from 'os';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AlbumStorePage } from '../../e2e/app.po';
import { Album } from './album';

@Injectable()
export class ProductService {

  _albumUrl: string = '../assets/album.json';
  album: any;

  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl)
      .map(response => <Album>response.json());
  }

}
function next(next: any, arg1: (json: Object) => void): Observable<Album> {
  throw new Error('Function not implemented.');
}

