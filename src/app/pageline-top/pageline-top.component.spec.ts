import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagelineTopComponent } from './pageline-top.component';

describe('PagelineTopComponent', () => {
  let component: PagelineTopComponent;
  let fixture: ComponentFixture<PagelineTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagelineTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagelineTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
