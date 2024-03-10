import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from 'src/app/core/services/annonces.service';

@Component({
  selector: 'app-annonces-layout',
  templateUrl: './annonces-layout.component.html',
  styleUrls: ['./annonces-layout.component.scss'],
})
export class AnnoncesLayoutComponent implements OnInit {
  annonces: any[] = [];

  constructor(private annoncesService: AnnoncesService) {}

  ngOnInit() {
    this.loadAnnonces();
  }

  loadAnnonces() {
    this.annoncesService.getAnnonces().subscribe({
      next: (data) => (this.annonces = data),
      error: (error) => console.error('There was an error!', error),
    });
  }
}
