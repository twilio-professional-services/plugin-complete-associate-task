import { manager } from "./endTask";
import { endTaskUtil } from "./endTask";

class GetAssociateTask {
  loopTask() {
    const workerTasks = manager.store.getState()?.flex?.worker?.tasks || [];
    // eslint-disable-next-line no-unused-vars
    workerTasks.forEach(function (value, key) {
      if (value.status == "wrapping") {
        endTaskUtil.startEndTask(value.sid, value.taskSid);
      }
    });
  }
}

export const getAssociateTask = new GetAssociateTask();
