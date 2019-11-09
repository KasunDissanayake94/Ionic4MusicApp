import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

    baseUrl = 'http://ws.audioscrobbler.com/2.0/';
    apiKey = 'e10c7683cae1474051fb275de242c610';

  constructor(public http: HttpClient) {
  }

    getAllArtists() {
        const url = this.baseUrl + '?method=library.getartists&api_key=' + this.apiKey + '&user=joanofarctan&format=json';
        return this.http.get(url).pipe(map((res: any) => {
            console.log('res', res);
            return res;
        }));
    }
}