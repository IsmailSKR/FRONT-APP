import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnoncesLayoutComponent } from './components/annonces-layout/annonces-layout.component';
import { AnnoncesRoutingModule } from './annonces-routing-module';

@NgModule({
  declarations: [AnnoncesLayoutComponent],
  imports: [CommonModule, AnnoncesRoutingModule],
})
export class AnnoncesModule {}
