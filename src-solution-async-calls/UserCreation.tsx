import React, {Component, ReactElement} from "react";

import {IDispatchProps} from "./types";
import {submitUser} from "./actions";

type UserCreationState = {
    firstName: string,
    lastName: string
}

export default class UserCreation extends Component<IDispatchProps, UserCreationState> {

    constructor(props: IDispatchProps) {
        super(props);
        this.state = {firstName: "", lastName: ""};
    }

    render(): ReactElement {
        return (
            <div>
                <div>
                    <label>First name:</label>
                    <input type="text"
                           onBlur={(e): void => this.setState({firstName: e.target.value})}/>
                </div>
<div>
  <label>Last name:</label>
  <input type="text" onBlur={(e): void => this.setState({lastName: e.target.value})}/>
</div>
<div>
  <button
    onClick={(): void => {
      this.props.dispatch(submitUser(this.state))
    }}
  >Submit</button>
</div>
            </div>
        );
    }
}
