import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { setSessionId, addClick } from "./userTrackerSlice";

const UserTracker = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSessionId(Date.now()));
  });
  return (
    <div
      onClick={(e) =>
        dispatch(
          addClick({
            clientX: e.clientX,
            clientY: e.clientY,
            timestamp: e.timeStamp,
          })
        )
      }
    >
      {props.children}
    </div>
  );
};

export default UserTracker;
