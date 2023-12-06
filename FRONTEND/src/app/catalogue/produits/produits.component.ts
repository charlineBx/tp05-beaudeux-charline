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
  produitsCatalogue: Produit[] = [];
  produitsFiltres: Produit[] = []; // Nouveau tableau pour les produits filtrés

  constructor(private catalogueService: CatalogueService, private store: Store) {
    //this.produits$ = this.catalogueService.getProduits();
  }

  ngOnInit() {
    this.catalogueService.getProduits().subscribe({
      next: (data) => {
        this.produitsCatalogue = data;
        this.filterProducts(); // Appeler la fonction de filtrage lors de l'initialisation
        console.log(data);
      }
    });
  }

  // Fonction pour filtrer les produits en fonction de la recherche
  filterProducts() {
    this.produitsFiltres = this.produitsCatalogue.filter((produit: Produit) =>
      produit.titre.toLowerCase().includes(this.recherche.toLowerCase())
    );
  }

  addProduitPanier(p: Produit): void {
    this.store.dispatch(new AddProduit(p));
  }
}
