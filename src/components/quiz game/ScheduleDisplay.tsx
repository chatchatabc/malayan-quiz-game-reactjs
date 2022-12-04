import React, { useState } from "react";
import { ObjectInterface } from "../../helpers/commonInterface";
import MotionDiv from "../widgets/MotionDiv";

function ScheduleDisplay() {
  return (
    <MotionDiv className="flex-1 flex flex-col justify-center px-5">
      <div className="border-4 border-dashed flex flex-col py-5 px-2 text-center border-gray-200 rounded-xl">
        <span className="text-7xl material-symbols-outlined">live_help</span>
        <p>There is no game at the moment.</p>
        <p>Check back again at 12:30PM!</p>
      </div>
    </MotionDiv>
  );
}

export default ScheduleDisplay;
