import trackerAction from "../TaskTracker";
import { v4 as uuidv4 } from "uuid";
// import { CountdownTimer } from "../timerHelpers/timerHelpers";


const addTracker = ({ nameTracker}) => ({
  type: "tracker/addSuccess",
  payload: {
    id: uuidv4(),
    nameTracker: nameTracker!=="" ? nameTracker : `tracker# ${new Date().getSeconds()}`,
    timer: new Date()
  },
});
const getTrackers = (state) => ({
  type: "tracker/getTrackertSuccess",
  payload: state
});

const removeTracker = (id) => (dispatch) => {
  dispatch(trackerAction.trackerRemoveSuccess(id));
};
export default {
  addTracker,
  removeTracker,
  getTrackers,
};
