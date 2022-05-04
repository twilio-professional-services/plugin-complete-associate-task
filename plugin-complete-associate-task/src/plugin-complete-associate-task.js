import React from "react";
import { FlexPlugin } from "flex-plugin";

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
  init(flex) {
    flex.WorkerCanvas.Content.add(
      <CompleteAssociateTaskButton key="CompleteAssociateTaskButton" />,
      {
        sortOrder: 40,
      }
    );
  }
}
