# Flex Complete Associate Task Plugin

This Flex Plugin allows supervisors to close out the tasks that are in wrapping state by clicking a button on the supervisor view. 


## Setup

### Prerequisite

Prerequisites
Before beginning with this Flex plugin, you'll want to make sure that:

You have a working Twilio Flex account
You have Node.js as well as npm installed
npm generally gets installed along with Node.js, but make sure you have it anyway
You have the latest Twilio CLI installed
Your Twilio CLI is running the latest Serverless Plugin

### Configuration

serverless/.env
Next, we'll need to configure the environment variables for the Twilio Functions. Start by renaming the environment file to remove .example and opening it with your editor:

mv serverless/.env.example serverless/.env

vim serverless/.env
Now, just like before, replace the temporary strings with your actual values

Before
ACCOUNT_SID=accountSid
AUTH_TOKEN=authToken

After
ACCOUNT_SID=AC...
AUTH_TOKEN=blah...

Deploying Functions
Before we can configure the last file, we'll need to deploy our Twilio Functions and grab the Runtime Domain. To do so, we'll be using the Twilio CLI and the Serverless Plugin that you installed as a prerequisiste.

First off, make sure that you have authenticated according to the Twilio CLI documentation.

Then cd into the Functions directory and deploy them:

cd src/Functions
twilio serverless:deploy
Once everything gets deployed, your response should look something like this:

Deployment Details
Domain: foobar-xxx-dev.twilio.io
Service:
   custom-transfer-directory (ZS...)
Environment:
   dev (ZE...)
Build SID:
   ZB...
View Live Logs:
   Open the Twilio Console
Functions:
   [protected] https://foobar-xxx-dev.twilio.io/completeTasks
Assets:
The value we're looking for comes after Domain: – that's your Runtime Domain.

config.js
Now open src/config.js in your text editor. Notice the runtime domain set to a default value? Let's change that:

# Before:
export default {
    runtimeDomain: "http://localhost:3000"
}

# After:
export default {
    runtimeDomain: "https://foobar-xxx-dev.twilio.io"
}
And now your plugin is fully configured! You can now run it locally to test and customize it, or build it into a package and upload it to your Twilio Assets for hosted use.




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
