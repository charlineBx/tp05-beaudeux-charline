import { Component } from '@angular/core';
import { Produit } from '../catalogue/models/produit';
import { CatalogueService } from '../catalogue/catalogue.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: string = '';
  password: string = '';

  nom: string = '';
  prenom: string = '';
  cnx: boolean = false;
  produits$: Observable<Array<Produit>>;
  constructor(private catalogueService: CatalogueService) {
    this.produits$ = this.catalogueService.getProduits();
  }
  connexion() {
    this.catalogueService.loginClient(this.login, this.password).subscribe((c) => {
      this.nom = c.nom;
      this.prenom = c.prenom;
      this.cnx = true;
    });
  }
}
