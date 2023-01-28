import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  showCreateDraftRoomModal: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onCreateDraftRoomClick() {
    this.showCreateDraftRoomModal = true;
  }

  onCloseModal() {
    this.showCreateDraftRoomModal = false;
  }

}
