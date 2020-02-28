const DisplaySettings = {
  toggle: (state, action) => {
    let stateCopy = Object.assign({}, state);
    stateCopy.settings.showDisplaySettings = action.showDisplaySettings;
    return stateCopy;
  },

  save: (state, action) => {
    let stateCopy = Object.assign({}, state);
    stateCopy.columns = action.columns;
    stateCopy.settings.rowsinPage = action.rowsinPage;
    stateCopy.settings.withCheckBoxes = action.withCheckBoxes;
    stateCopy.settings.showDisplaySettings = false;
    stateCopy.settings.activePage = 0;
    return stateCopy;
  }
}

export default DisplaySettings