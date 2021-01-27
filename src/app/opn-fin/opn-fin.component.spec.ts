import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpnFinComponent } from './opn-fin.component';

describe('OpnFinComponent', () => {
  let component: OpnFinComponent;
  let fixture: ComponentFixture<OpnFinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpnFinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpnFinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
