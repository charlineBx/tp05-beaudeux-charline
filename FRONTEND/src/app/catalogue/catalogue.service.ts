import { Injectable } from '@angular/core';
import { Produit } from './models/produit';
import { Client } from './models/client';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
@Injectable()
export class CatalogueService {
  constructor(private http: HttpClient) {}
  public getProduits(): Observable<Produit[]> {
    console.log("test");
   
   const liste = this.http.get<Produit[]>(environment.backendProduit);
   console.log(liste);
   return liste;
  }

  public loginClient(login: string, password: string): Observable<Client> {
    let data: String;
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };
    data = 'login=' + login + '&password=' + password;
    return this.http.post<Client>(
      environment.backendLoginClient,
      data,
      httpOptions
    );
  }
}
