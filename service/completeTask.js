exports.handler = async function (context, event, callback) {
  const workspaceSID = "WS3e5541ad06ebbe08ad32f2e8c0dcae92";
  const reservationSid = event.reservationSid;
  const taskSid = event.taskSid;
  console.log("reserverastion sid is" + reservationSid);
  console.log("task SID is" + taskSid);

  const client = context.getTwilioClient();

  const response = new Twilio.Response();
  response.appendHeader("Access-Control-Allow-Origin", "*");
  response.appendHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
  response.appendHeader("Access-Control-Allow-Headers", "Content-Type");

  client.taskrouter
    .workspaces(workspaceSID)
    .tasks(taskSid)
    .reservations(reservationSid)
    .update({ reservationStatus: "completed" })
    .then((data) => {
      response.appendHeader("Content-Type", "application/json");
      response.setBody(data);
      console.log("response data is" + data);
      // Return a success response using the callback function.
      callback(null, response);
    })
    .catch((err) => {
      response.appendHeader("Content-Type", "plain/text");
      response.setBody(err.message);
      response.setStatusCode(500);
      // If there's an error, send an error response
      // Keep using the response object for CORS purposes
      callback(null, response);
    });
};
