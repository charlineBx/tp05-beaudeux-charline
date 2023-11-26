import { Component} from '@angular/core';
import { Produit } from '../catalogue/models/produit';
import { CatalogueService } from '../catalogue/catalogue.service';
import { Observable } from 'rxjs';
import { ServiceConnexionService } from '../service-connexion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  login: string = '';
  password: string = '';

  nom: string = '';
  prenom: string = '';
  cnx : boolean = false;
 
  produits$: Observable<Array<Produit>>;
  constructor(private catalogueService: CatalogueService,private serviceConnexion: ServiceConnexionService) {
    this.produits$ = this.catalogueService.getProduits();
  }

  connexion() {
    this.cnx = true;
    this.serviceConnexion.setData(this.cnx);
    this.catalogueService.loginClient(this.login, this.password).subscribe((c) => {
      this.nom = c.nom;
      this.prenom = c.prenom;
    });
    
  }
}
