import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicquestionOneComponent } from './basicquestion-one.component';

describe('BasicquestionOneComponent', () => {
  let component: BasicquestionOneComponent;
  let fixture: ComponentFixture<BasicquestionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicquestionOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicquestionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
