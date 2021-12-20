import { manager } from "./endTask";
import { TaskHelper } from "@twilio/flex-ui";
import { endTaskUtil } from "./endTask";

class GetAssociateTask {
  loopTask() {
    let workerTasks = new Map();
    workerTasks = manager.store.getState()?.flex?.worker?.tasks || [];
    workerTasks.forEach(function (value, key) {
      console.log("the task is" + key + " = " + value);
      let taskProps = new Map();
      taskProps = value.status;
      console.log("value" + value);
      console.log("reservationSID" + value.sid);
      if (taskProps == "wrapping") {
        console.log("complete the task");
        console.debug("reservation sid" + value.sid);
        console.debug("task sid is" + value.taskSid);
        endTaskUtil.startEndTask(value.sid, value.taskSid);
      }
    });
  }
}

export const getAssociateTask = new GetAssociateTask();
