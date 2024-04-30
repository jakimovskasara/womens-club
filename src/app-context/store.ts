import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import someSlice from "./someSlice";

const store = configureStore({
  reducer: {
    someSliceReducer: someSlice,
  },
});

type RootStore = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;

export { store, useAppDispatch, useAppSelector };
