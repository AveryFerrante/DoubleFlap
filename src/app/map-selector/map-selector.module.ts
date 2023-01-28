import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './entry/entry.component';
import { MapSelectorRoutingModule } from './map-selector-routing.module';
import { ModalComponent } from './modal/modal.component';
import { CreateDraftRoomModalComponent } from './create-draft-room-modal/create-draft-room-modal.component';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from './services/local-storage.service';



@NgModule({
  declarations: [
    EntryComponent,
    ModalComponent,
    CreateDraftRoomModalComponent
  ],
  imports: [
    CommonModule,
    MapSelectorRoutingModule,
    FormsModule
  ],
  providers: [
    LocalStorageService
  ]
})
export class MapSelectorModule { }
