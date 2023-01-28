import { CreateAsType, FormatType } from "./enums";

export class CreateDraftRoomSettings {

    constructor(public teamName: string, public createAsSelection: CreateAsType, public formatSelection: FormatType) {  }
    public static createDefault(): CreateDraftRoomSettings {
        return new CreateDraftRoomSettings('', CreateAsType.Drafter, FormatType.PatoLeague);
    }
}