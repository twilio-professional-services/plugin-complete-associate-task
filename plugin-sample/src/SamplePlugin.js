import React from "react";
import { Flex, Manager, VERSION } from "@twilio/flex-ui";
import { FlexPlugin } from "flex-plugin";

import CustomTaskListContainer from "./components/CustomTaskList/CustomTaskList.Container";
import reducers, { namespace } from "./states";
import { Button } from "@material-ui/core";
import Phone from "@material-ui/icons/Phone";
import { IconButton } from "@twilio/flex-ui-core";
import { Actions } from "@twilio/flex-ui";

const PLUGIN_NAME = "SamplePlugin";

export default class SamplePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    this.registerReducers(manager);

    const clickConsole = () => console.log("This is a new line");

    const options = { sortOrder: -1 };
    flex.AgentDesktopView.Panel1.Content.add(
      <CustomTaskListContainer key="SamplePlugin-component" />,
      options
    );

    flex.OutboundDialerPanel.Content.add(
      <IconButton key="CustomButton" onClick={clickConsole} />,
      { sortOrder: 5 }
    );

    manager.serviceConfiguration.outbound_call_flows.default.queue_sid =
      "WQ0d393265e01241bc92a92439800c7e8f";

    console.log(
      "default queuesid is " +
        manager.serviceConfiguration.outbound_call_flows.default.queue_sid
    );

    Actions.addListener("beforeStartOutboundCall", async (payload, abort) => {
      Actions.invokeAction("StartOutboundCall", {
        destination: "12061111111",
        queueSid: "WQb9c3ddb67e8e750a8b56f629b27368c1",
      });
    });
  }
  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  registerReducers(manager) {
    if (!manager.store.addReducer) {
      // eslint: disable-next-line
      console.error(
        `You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`
      );
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}
