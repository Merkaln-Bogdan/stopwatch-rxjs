import { combineReducers } from "redux";
import trackerAction from "../TaskTracker";
import { createReducer } from "@reduxjs/toolkit";

const onAddTracker = (state, action) =>[...state, action.payload]
const onRemoveTracker = (state, action) =>
  state.filter((tracker) => tracker.id !== action.payload);

const itemTrack = createReducer([], {
  [trackerAction.getTrackersSuccess]: (state, action) => action.payload,
  [trackerAction.trackerStartChange]: (state, action) => console.log(action.payload),
  [trackerAction.trackerAddSuccess]: onAddTracker,
  [trackerAction.trackerRemoveSuccess]: onRemoveTracker,
});


export default combineReducers({ itemTrack });
