import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipy-detail',
  templateUrl: './recipy-detail.page.html',
  styleUrls: ['./recipy-detail.page.scss'],
})
export class RecipyDetailPage implements OnInit {

  loadedRecipe: Recipe;


  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipesService,
    private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        //redirect
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipeService.getRecipe(recipeId);
    });
  }

  onDeleteRecipe() {
    this.alertController.create({
      header: "Are you sure?", message: "Do you really want to delete this recipe?",
      buttons: [{ text: "Cancel", role: "cancel" }, {
        text: "Delete", handler: () => {
          this.recipeService.deleteRecipe(this.loadedRecipe.id);
          this.router.navigate(['/recipes']);
        }
      }]
    }).then(alertEl => alertEl.present());

  }

}
