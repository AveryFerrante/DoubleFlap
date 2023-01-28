import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CreateDraftRoomSettings } from '../models/create-draft-room-selections';
import { CreateAsType, FormatType } from '../models/enums';
import { LocalStorageService } from '../services/local-storage.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-create-draft-room-modal',
  templateUrl: './create-draft-room-modal.component.html',
  styleUrls: ['./create-draft-room-modal.component.scss']
})
export class CreateDraftRoomModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter<boolean>();
  formatSelectionOptions: Array<{ displayName: string, value: FormatType }>;
  createAsOptions: Array<{ displayName: string, value: CreateAsType }>;
  
  teamName!: string;
  formatSelection!: FormatType;
  createAsSelection!: CreateAsType;
  errorText: string = '';
  get isCreatingAsAdmin(): boolean { return this.createAsSelection === CreateAsType.Admin; }

  constructor(private localStorageService: LocalStorageService, private firestore: AngularFirestore) {
    this.formatSelectionOptions = this.initializeFormatSelectionOptions();
    this.createAsOptions = this.initializeCreateAsOptions();
    this.applyPreviousSelections();
    firestore.collection('draft-rooms').get().subscribe(val => val.forEach(a => console.log(a.data())));
  }

  ngOnInit(): void {
  }

  onCloseModal() {
    this.localStorageService.saveLatestDraftRoomCreationInfo(new CreateDraftRoomSettings(this.teamName, this.createAsSelection, this.formatSelection));
    this.closeModal.emit(true);
  }

  onCreate() {
    if (!this.inputIsValid()) {
      this.errorText = 'You must enter a team name!'
    }
    else {
      this.errorText = '';
      let adminId = 'ad' + Math.random().toString(36).substring(2, 7);
      let drafterId = 'dr' + Math.random().toString(36).substring(2, 7);
      let spectatorId = 'sp' + Math.random().toString(36).substring(2, 7);
      this.firestore.collection('draft-rooms').add({ adminId, drafterId, spectatorId });
    }
  }

  private inputIsValid(): boolean {
    return !(this.createAsSelection !== CreateAsType.Admin && this.teamName === '');
  }

  private initializeFormatSelectionOptions(): Array<{ displayName: string, value: FormatType }> {
    return [
      { displayName: 'Pato Gemstone League', value: FormatType.PatoLeague },
      { displayName: 'Best of 3', value: FormatType.BO3 },
      { displayName: 'Best of 5', value: FormatType.BO5 },
      { displayName: 'Best of 7', value: FormatType.BO7 },
    ];
  }

  private initializeCreateAsOptions(): Array<{ displayName: string, value: CreateAsType }> {
    return [
      { displayName: 'Drafter', value: CreateAsType.Drafter },
      { displayName: 'Admin', value: CreateAsType.Admin }
    ];
  }

  private applyPreviousSelections() {
    let previousSelections = this.localStorageService.getLatestDraftRoomCreationInfo();
    this.teamName = previousSelections.teamName;
    this.createAsSelection = previousSelections.createAsSelection;
    this.formatSelection = previousSelections.formatSelection;
  }

}
