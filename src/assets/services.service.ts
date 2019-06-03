import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http'; 
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';


@Injectable({
  providedIn: 'root',
})
export class MainService {
    constructor(private httpClient:HttpClient) { }

    getContentJSON(): Observable<any> {
        return this.httpClient.get("../../assets/questions-data.json").pipe(map(response => response), catchError(err => throwError(err)));
  }

}