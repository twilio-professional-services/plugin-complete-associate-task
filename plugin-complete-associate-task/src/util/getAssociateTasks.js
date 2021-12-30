import { manager } from "./endTask";
import { TaskHelper } from "@twilio/flex-ui";
import { endTaskUtil } from "./endTask";

class GetAssociateTask {
  loopTask() {
    const workerTasks = manager.store.getState()?.flex?.worker?.tasks || [];
    workerTasks.forEach(function (value, key) {
      if (value.status == "wrapping") {
        endTaskUtil.startEndTask(value.sid, value.taskSid);
      }
    });
  }
}

export const getAssociateTask = new GetAssociateTask();
