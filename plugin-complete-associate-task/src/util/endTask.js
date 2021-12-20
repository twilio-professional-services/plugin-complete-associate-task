import { Manager } from "@twilio/flex-ui";

export const manager = Manager.getInstance();

class EndTaskUtil {
  startEndTask = async (reservationSid, taskSid) => {
    console.debug(
      "Starting completing the reservation:",
      reservationSid,
      taskSid
    );
    const fetchUrl = `${process.env.REACT_APP_SERVICE_BASE_URL}/completeTask`;
    console.log("fetch URL is" + fetchUrl);

    const fetchBody = {
      Token: manager.store.getState().flex.session.ssoTokenPayload.token,
      taskSid,
    };
    const fetchOptions = {
      method: "POST",
      body: {
        reservationSid,
        taskSid,
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    };

    let response;
    try {
      const endTaskResponse = await fetch(fetchUrl, fetchOptions);
      response = await endTaskResponse.json();
    } catch (error) {
      console.error(`Error end task for call SID ${taskSid}.`, error);
    }

    return response;
  };
}

export const endTaskUtil = new EndTaskUtil();
