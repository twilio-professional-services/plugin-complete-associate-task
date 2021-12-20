import * as React from 'react';
import {
  withTheme,
  Button,
} from '@twilio/flex-ui-core';
import { endTaskUtil } from '../../util/endTask';
import { getAssociateTask } from '../../util/getAssociateTasks';

class CompleteAssociateTaskButton extends React.PureComponent {
  handleClick = () => {
    console.log("Terminate Task");
    getAssociateTask.loopTask();
  }

  render() {
    return (
        <Button
            className="Twilio-Complete-AssociateTaskButton"
            disabled={null}
            onClick={this.handleClick}
            themeOverride={this.props.theme.WorkerSkills.CancelButton}
            roundCorners={false}
      >
        Close tasks
      </Button>
    );
  }
}


export default withTheme(CompleteAssociateTaskButton);