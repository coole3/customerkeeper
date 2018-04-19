import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Appoint } from '../models/user.model';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  getUserAppoint() : Observable<Array<Appoint>> {
    return this.http.get<Array<Appoint>>('api/api/appoint');
  }
}
