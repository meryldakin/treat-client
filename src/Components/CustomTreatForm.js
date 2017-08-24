import React, { Component } from "react";

export default class CustomTreatForm extends Component {
  constructor() {
    super();
    this.state = {
      item: "",
      amount: ""
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.add_treat(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            item:
            <input type="text" name="item" onChange={this.onChange} />
          </label>
          <label>
            amount:
            <input type="text" name="amount" onChange={this.onChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
