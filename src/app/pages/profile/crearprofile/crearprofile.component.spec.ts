import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearprofileComponent } from './crearprofile.component';

describe('CrearprofileComponent', () => {
  let component: CrearprofileComponent;
  let fixture: ComponentFixture<CrearprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
