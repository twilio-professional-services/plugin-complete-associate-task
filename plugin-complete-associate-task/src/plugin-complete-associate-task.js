import React from "react";
import {
  Flex,
  VERSION,
} from "@twilio/flex-ui";
import { FlexPlugin } from "flex-plugin";

import reducers, { namespace } from "./states";
import CompleteAssociateTaskButton from "./components/CustomButton/CompleteAssociateTaskButton";


const PLUGIN_NAME = "CompleteAssociateTaskPlugin";

export default class CompleteAssociateTaskPlugin extends FlexPlugin {
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

    flex.WorkerCanvas.Content.add(
      <CompleteAssociateTaskButton key="CompleteAssociateTaskButton" />, {
        sortOrder: 40
    }
    );
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
