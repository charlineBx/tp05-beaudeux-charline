import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogueService } from '../catalogue.service';
import { Produit } from '../models/produit';
import { AddProduit } from 'src/app/shared/actions/produit-action';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
  providers: [CatalogueService],
})
export class ProduitsComponent implements OnInit {
  recherche: string = '';
  produits$: Observable<Produit[]>;

  constructor(private catalogueService: CatalogueService,private store:Store) {
    this.produits$ = this.catalogueService.getProduits();
  }

  ngOnInit() {}

  addProduitPanier(p:Produit): void{
    this.store.dispatch(new AddProduit(p));

  }
}
