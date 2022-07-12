import { Manager } from "@twilio/flex-ui";

export const manager = Manager.getInstance();

class EndTaskUtil {
  startEndTask = async (reservationSid, taskSid) => {
    console.debug(
      "Starting completing the reservation:",
      reservationSid,
      taskSid
    );
    const fetchUrl = `${process.env.FLEX_APP_FUNCTIONS_BASE}/completeTask`;

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
      response = await fetch(fetchUrl, fetchOptions);
    } catch (error) {
      console.error(`Error end task for call SID ${taskSid}.`, error);
    }
    return response;
  };
}

export const endTaskUtil = new EndTaskUtil();
