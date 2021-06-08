import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import TrackerReducer from "./trackerReducer/trackerReducer";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const trackerPersistConfig = {
  key: "trackers",
  storage,
};

export const store = configureStore({
  reducer: {
    trackState: persistReducer(trackerPersistConfig, TrackerReducer),
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
