import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitCloneComponent } from './git-clone.component';

describe('GitCloneComponent', () => {
  let component: GitCloneComponent;
  let fixture: ComponentFixture<GitCloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitCloneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
