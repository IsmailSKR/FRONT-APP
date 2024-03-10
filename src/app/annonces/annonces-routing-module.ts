import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { AnnoncesLayoutComponent } from './components/annonces-layout/annonces-layout.component';

const routes: Routes = [
  { path: 'annonces', component: AnnoncesLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnoncesRoutingModule {}
