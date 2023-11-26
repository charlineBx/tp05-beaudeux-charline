import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProduitState } from '../shared/states/produit-state';
import { ServiceConnexionService } from '../service-connexion.service';

@Component({
  selector: 'app-tetiere',
  templateUrl: './tetiere.component.html',
  styleUrls: ['./tetiere.component.css']
})
export class TetiereComponent implements OnInit {
  title = 'TP04 - Catalogue de produits avec panier';
  cnxEnfant : boolean;
  constructor(private serviceConnexion : ServiceConnexionService) { }

  ngOnInit() {
    this.serviceConnexion.connexionClient$.subscribe((donnee)=>{
      this.cnxEnfant = donnee;
    });
  }

  @Select(ProduitState.getNbProduits) nb$: Observable<number>;

}