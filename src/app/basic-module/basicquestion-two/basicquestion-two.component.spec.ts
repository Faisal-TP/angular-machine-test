import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicquestionTwoComponent } from './basicquestion-two.component';

describe('BasicquestionTwoComponent', () => {
  let component: BasicquestionTwoComponent;
  let fixture: ComponentFixture<BasicquestionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicquestionTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicquestionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
