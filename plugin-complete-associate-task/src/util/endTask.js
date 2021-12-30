import { Manager } from "@twilio/flex-ui";

export const manager = Manager.getInstance();

class EndTaskUtil {
  startEndTask = async (reservationSid, taskSid) => {
    console.debug(
      "Starting completing the reservation:",
      reservationSid,
      taskSid
    );
    const fetchUrl = "https://completetask-5247.twil.io/completeTask";

    const fetchBody = {
      reservationSid,
      taskSid,
    };

    const fetchOptions = {
      method: "POST",
      body: new URLSearchParams(fetchBody),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    };

    let response;
    try {
      const endTaskResponse = await fetch(fetchUrl, fetchOptions);
    } catch (error) {
      console.error(`Error end task for call SID ${taskSid}.`, error);
    }
    return response;
  };
}

export const endTaskUtil = new EndTaskUtil();
