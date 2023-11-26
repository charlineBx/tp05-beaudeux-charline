import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TP04 - Catalogue de produits avec panier';
  cnxParent: boolean = false;
  public recevoirDonneesCnx(donnees : boolean ){
    this.cnxParent = donnees;
    console.log("coucou",this.cnxParent);
  }
}
  
