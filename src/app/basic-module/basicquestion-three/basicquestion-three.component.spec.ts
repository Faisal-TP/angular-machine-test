import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicquestionThreeComponent } from './basicquestion-three.component';

describe('BasicquestionThreeComponent', () => {
  let component: BasicquestionThreeComponent;
  let fixture: ComponentFixture<BasicquestionThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicquestionThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicquestionThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
