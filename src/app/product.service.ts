import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { userInfo } from 'os';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AlbumStorePage } from '../../e2e/app.po';
import { Album } from './album';
import { Product } from './product';

@Injectable()
export class ProductService {

  private _albumUrl: string = '../assets/album.json';
  album: any;

  _productsUrl: string = '../assets/products.json';

  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl)
      .map(response => <Album>response.json());
  }

  getProducts(): Observable<Product[]> {
    return this._http.get(this._productsUrl)
      .map(response => <Product[]>response.json());
  }

}
