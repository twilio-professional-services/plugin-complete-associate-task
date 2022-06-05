import { manager } from "./endTask";
import { endTaskUtil } from "./endTask";

class GetAssociateTask {
  loopTask() {
    const selectedWorkerSid =
      manager.store.getState()?.flex?.view?.selectedWorkerInSupervisorSid || [];

    const workerTasks = this.getWorkerTasks(selectedWorkerSid);
    // eslint-disable-next-line no-unused-vars
    workerTasks.forEach(function (value, key) {
      if (value.status == "wrapping") {
        endTaskUtil.startEndTask(value.sid, value.taskSid);
      }
    });
  }

  getWorkerTasks(selectedWorkerSid) {
    const workers = manager.store.getState()?.flex?.supervisor?.workers || [];
    var workerTasks;
    workers.forEach(function (value) {
      if (value.worker.sid == selectedWorkerSid) {
        workerTasks = value.tasks;
      }
    });
    return workerTasks;
  }
}

export const getAssociateTask = new GetAssociateTask();
