import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncesLayoutComponent } from './annonces-layout.component';

describe('AnnoncesLayoutComponent', () => {
  let component: AnnoncesLayoutComponent;
  let fixture: ComponentFixture<AnnoncesLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnoncesLayoutComponent]
    });
    fixture = TestBed.createComponent(AnnoncesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
