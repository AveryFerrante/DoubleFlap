import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDraftRoomModalComponent } from './create-draft-room-modal.component';

describe('CreateDraftRoomModalComponent', () => {
  let component: CreateDraftRoomModalComponent;
  let fixture: ComponentFixture<CreateDraftRoomModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDraftRoomModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDraftRoomModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
