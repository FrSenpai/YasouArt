import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllIllustrationsComponent } from './all-illustrations.component';

describe('AllIllustrationsComponent', () => {
  let component: AllIllustrationsComponent;
  let fixture: ComponentFixture<AllIllustrationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllIllustrationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllIllustrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
