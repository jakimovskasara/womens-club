import { createSlice } from "@reduxjs/toolkit";

type SliceState = {
  someProp1: boolean;
  someProp2: boolean;
  someProp3: string;
};

const initialSliceState: SliceState = {
  someProp1: false,
  someProp2: true,
  someProp3: "test",
};

const someSliceSlice = createSlice({
  name: "someSlice",
  initialState: initialSliceState,
  reducers: {
    reducer1: (state) => {
      state.someProp1 = true;
    },
    reducer2: (state, action) => {
      if (action.payload.someProp1 === true) {
        state.someProp1 = false;
      } else {
        state.someProp1 = true;
      }
    },
  },
});

export const { reducer1, reducer2 } = someSliceSlice.actions;
export default someSliceSlice.reducer;
