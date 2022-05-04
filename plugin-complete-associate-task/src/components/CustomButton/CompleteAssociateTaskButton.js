import * as React from "react";
import { withTheme, Button } from "@twilio/flex-ui-core";
import { getAssociateTask } from "../../util/getAssociateTasks";
import styled from "react-emotion";
import ReactTooltip from "react-tooltip";

export const CloseTaskButtonContainer = styled("div")`
  margin-left: 54px;
`;

class CompleteAssociateTaskButton extends React.PureComponent {
  handleClick = () => {
    getAssociateTask.loopTask();
  };

  //use set state here and when the state change, component became available or disable
  render() {
    return (
      <CloseTaskButtonContainer id="closeTaskcontainer">
        <Button
          className="Twilio-Complete-AssociateTaskButton"
          disabled={null}
          onClick={this.handleClick}
          // eslint-disable-next-line react/prop-types
          themeOverride={this.props.theme.WorkerSkills.CancelButton}
          roundCorners={false}
          data-tip
          data-for="closeTask"
        >
          Close tasks
        </Button>

        <ReactTooltip id="closeTask" place="top" effect="solid">
          Close the tasks in wrapping for this agent
        </ReactTooltip>
      </CloseTaskButtonContainer>
    );
  }
}

export default withTheme(CompleteAssociateTaskButton);
