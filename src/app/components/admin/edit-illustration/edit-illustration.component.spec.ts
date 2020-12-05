import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIllustrationComponent } from './edit-illustration.component';

describe('EditIllustrationComponent', () => {
  let component: EditIllustrationComponent;
  let fixture: ComponentFixture<EditIllustrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditIllustrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIllustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
