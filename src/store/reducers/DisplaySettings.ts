import { PayloadAction, createSlice } from '@reduxjs/toolkit'; // TODO: добавить PayloadAction

export const displaySettingsSlice = createSlice({
  name: 'displaySettingsSlice',
  initialState: 0,
  reducers: {
    toggle: (state: any, action: PayloadAction<boolean>) => {
      let stateCopy = Object.assign({}, state);
      stateCopy.settings.showDisplaySettings = action.payload;
      return stateCopy;
    },
    save: (state: any, action: any) => {
      let stateCopy = Object.assign({}, state);
      stateCopy.columns = action.columns;
      stateCopy.settings.rowsinPage = action.rowsinPage;
      stateCopy.settings.withCheckBoxes = action.withCheckBoxes;
      stateCopy.settings.showDisplaySettings = false;
      stateCopy.settings.activePage = 0;
      return stateCopy;
    }
  }
})