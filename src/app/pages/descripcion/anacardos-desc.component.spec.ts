import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnacardosDescComponent } from './anacardos-desc.component';

describe('AnacardosDescComponent', () => {
  let component: AnacardosDescComponent;
  let fixture: ComponentFixture<AnacardosDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnacardosDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnacardosDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
