import { Injectable } from '@angular/core';
import { CreateDraftRoomSettings } from '../models/create-draft-room-selections';

@Injectable()
export class LocalStorageService {
  localStorageKeys = {
    ['draftRoomSettings']: 'draftRoomSettings'
  };
  constructor() { }

  saveLatestDraftRoomCreationInfo(selections: CreateDraftRoomSettings): void {
    localStorage.setItem(this.localStorageKeys['draftRoomSettings'], JSON.stringify(selections));
  }

  getLatestDraftRoomCreationInfo(): CreateDraftRoomSettings {
    let value = localStorage.getItem(this.localStorageKeys['draftRoomSettings']);
    if (value) {
      return JSON.parse(value) as CreateDraftRoomSettings;
    }
    return CreateDraftRoomSettings.createDefault();
  }
}
