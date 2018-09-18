import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarHorizontalComponent } from './toolbar-horizontal.component';

describe('ToolbarHorizontalComponent', () => {
  let component: ToolbarHorizontalComponent;
  let fixture: ComponentFixture<ToolbarHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
