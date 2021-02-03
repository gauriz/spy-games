import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyGameComponent } from './spy-game.component';

describe('SpyGameComponent', () => {
  let component: SpyGameComponent;
  let fixture: ComponentFixture<SpyGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpyGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpyGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
