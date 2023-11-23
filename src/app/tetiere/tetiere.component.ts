import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProduitState } from '../shared/states/produit-state';

@Component({
  selector: 'app-tetiere',
  templateUrl: './tetiere.component.html',
  styleUrls: ['./tetiere.component.css']
})
export class TetiereComponent implements OnInit {
  title = 'TP04 - Catalogue de produits avec panier';
  constructor() { }

  ngOnInit() {
  }

  @Select(ProduitState.getNbProduits) nb$: Observable<number>;

}