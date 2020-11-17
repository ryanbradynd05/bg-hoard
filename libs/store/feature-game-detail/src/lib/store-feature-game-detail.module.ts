import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { GameDetailComponent } from './game-detail/game-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: GameDetailComponent}
    ]),
  ],
  declarations: [GameDetailComponent],
  exports: [GameDetailComponent],
})
export class StoreFeatureGameDetailModule {}
