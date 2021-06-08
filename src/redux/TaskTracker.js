  

import { createAction } from "@reduxjs/toolkit";
const trackerAddSuccess = createAction("tracker/addSuccess");
const getTrackersSuccess = createAction("tracker/getTrackertSuccess")
const trackerRemoveSuccess = createAction("tracker/removeSuccess");
const trackerStartChange =createAction("tracker/startChange")



export default{
  trackerAddSuccess,
  getTrackersSuccess,
  trackerRemoveSuccess,
  trackerStartChange
}
