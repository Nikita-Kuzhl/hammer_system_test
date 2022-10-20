import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { DRAG_DATA_KEY } from '../../../constant';

const initialState = {
  shapes: JSON.parse(localStorage.getItem(DRAG_DATA_KEY)) || [],
  selected: null
};

export const figureSlice = createSlice({
  name: 'figure',
  initialState,
  reducers: {
    addShape: (state, action) => {
      const id = uuid();
      state.shapes.push({ id, x: 200, y: 200, src: action.payload.src });
      state.selected = id;
    },
    updatePositionShape: (state, action) => {
      state.shapes = state.shapes.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, x: action.payload.x, y: action.payload.y };
        } else {
          return { ...item };
        }
      });
      state.selected = action.payload.id;
    },
    saveInLocalStorage: (state) => {
      localStorage.setItem(DRAG_DATA_KEY, JSON.stringify(state.shapes));
    },
    removeSaveAndShapes: (state) => {
      localStorage.removeItem(DRAG_DATA_KEY);
      state.shapes = [];
    },
    selectShapeInPanel: (state, action) => {
      state.selected = action.payload.id;
    },
    removeShape: (state) => {
      state.shapes = state.shapes.filter((item) => item.id !== state.selected);
      state.selected = '';
    },
    addShapesFromFile: (state, action) => {
      state.shapes = action.payload.item;
      localStorage.setItem(DRAG_DATA_KEY, JSON.stringify(state.shapes));
    }
  }
});

export const {
  addShape,
  updatePositionShape,
  saveInLocalStorage,
  removeSaveAndShapes,
  selectShapeInPanel,
  removeShape,
  addShapesFromFile
} = figureSlice.actions;
export default figureSlice.reducer;
