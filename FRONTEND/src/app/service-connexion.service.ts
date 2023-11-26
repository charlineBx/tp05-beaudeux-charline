import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceConnexionService {
  private donneesCnx = new BehaviorSubject<boolean>(false);
  public connexionClient$ = this.donneesCnx.asObservable();
  
  setData(donnee : boolean){
    this.donneesCnx.next(donnee);
  }
}
