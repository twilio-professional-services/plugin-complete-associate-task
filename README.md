# Supervisor complete wrapping task for the agent

This Flex Plugin allows supervisor to close out the tasks that are in wrapping state. 


## Setup

### Requirements

- An active Twilio account. [Sign up](https://www.twilio.com/try-twilio) if you don't already have one.

- Real-time Queues View enabled. The feature can be activated via Twilio Console Admin -> Pre-release Features -> REAL-TIME QUEUES VIEW.

- Make sure you have [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com) installed.


## Local development

1. Clone this repository.
2. Rename the example app configuration file.
3. Install dependencies.

npm install


4. Run the application.

twilio flex:plugins:start 


5. Navigate to [http://localhost:3000](http://localhost:3000).

When you make changes to your code, the browser window will be automatically refreshed.


## Deploy

When you are ready to deploy your plugin, in your terminal run:

twilio flex:plugins:deploy

This will publish your plugin as a Private Asset that is accessible by the Functions & Assets API.



- Added README.


## Disclaimer
This software is to be considered "sample code", a Type B Deliverable, and is delivered "as-is" to the user. Twilio bears no responsibility to support the use or implementation of this software.
