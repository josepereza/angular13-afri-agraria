import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarprofileComponent } from './modificarprofile.component';

describe('ModificarprofileComponent', () => {
  let component: ModificarprofileComponent;
  let fixture: ComponentFixture<ModificarprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
