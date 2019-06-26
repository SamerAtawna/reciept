import { Component, OnInit, ViewChild } from '@angular/core';

import {Recipe} from './recipe.model';
import { RecipesService } from './recipes.service';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';






@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  public searchField = '';
  public recipes: Recipe[] = [];





  constructor(private recipesService: RecipesService, public nav: NavController,
     public alertController: AlertController, private barcodeScanner: BarcodeScanner) {

      }
      public scan() {
        this.barcodeScanner.scan().then(barcodeData => {
         this.searchField = barcodeData.text;
         }).catch(err => {
             console.log('Error', err);
         });
      }

public filterItems() {
  if (this.searchField === '') {
    this.recipes = this.recipesService.getAllRecipes();
    return;
    }
  this.recipes = [];
this.recipes.push(this.recipesService.getRecipe(this.searchField));
}
  ngOnInit() {
if (this.searchField === '') {
this.recipes = this.recipesService.getAllRecipes();
}

  }





}
