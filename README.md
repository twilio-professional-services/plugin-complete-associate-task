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

Over the course of the configuration process, you'll need several values from your Twilio account. The first three can be found right now in the Twilio Console, but the last one will require you to deploy your Twilio Functions to find (Don't worry, we'll cover that!)

- Account SID
  - Found on the [Twilio Console Homepage](https://www.twilio.com/console)
  - String starting with "AC..."
- Auth Token
  - Found on the [Twilio Console Homepage](https://www.twilio.com/console)
  - Secure string of 32 characters that we'll call "blah..." for the sake of communication
- Workspace ID
  - Found in your [TaskRouter Dashboard](https://www.twilio.com/console/taskrouter/dashboard)
  - String starting with "WS..."
- Serverless Runtime Domain
  - We'll grab this after we've deployed our Twilio Functions
  - A web domain that looks something like "foobar-xxx-dev.twilio.io"

We'll be entering these values into three files, some of which don't exist yet:
- public/appConfig.js
- serverless/.env
- src/config.js

#### public/appConfig.js
To kick things off, rename the example app configuration file to remove `.example`, then open it in your editor of choice

```bash
mv public/appConfig.example.js public/appConfig.js

vim public/appConfig.js
```

You'll notice that this file has a temporary string variable for your Account Sid. Replace that string with your actual value.

```javascript
# Before:
var accountSid = 'accountSid';

# After
var accountSid = 'AC...';
```
#### serverless/.env
Next, we'll need to configure the environment variables for the Twilio Functions. Start by renaming the environment file to remove `.example` and opening it with your editor:

```bash
mv serverless/.env.example serverless/.env

vim serverless/.env
```

Now, just like before, replace the temporary strings with your actual values

```
# Before
ACCOUNT_SID=accountSid
AUTH_TOKEN=authToken
TWILIO_WORKSPACE_SID=workspaceSid

# After
ACCOUNT_SID=AC...
AUTH_TOKEN=blah...
TWILIO_WORKSPACE_SID=WS...
```

#### Deploying Functions

Before we can configure the last file, we'll need to deploy our Twilio Functions and grab the Runtime Domain. To do so, we'll be using the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart) and the [Serverless Plugin](https://github.com/twilio-labs/plugin-serverless) that you installed as a prerequisiste.

First off, make sure that you have authenticated according to the [Twilio CLI documentation](https://www.twilio.com/docs/twilio-cli/quickstart#login-to-your-twilio-account).

Then cd into the Functions directory and deploy them:

```bash
cd src/Functions
twilio serverless:deploy
```

Once everything gets deployed, your response should look something like this:

```bash
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
   [protected] https://foobar-xxx-dev.twilio.io/getTeamMembers
Assets:
```

The value we're looking for comes after `Domain:` – that's your Runtime Domain.


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
