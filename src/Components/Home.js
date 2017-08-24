import React, { Component } from "react";
import CustomTreatForm from "./CustomTreatForm.js";
import * as api from "../api/index.js";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      account: 0,
      current_user_id: 0,
      treats: []
    };
  }

  add_treat = treat_params => {
    api.post_treat(treat_params);
  };

  render() {
    return (
      <div>
        <h1>This is Treat! What did you treat yourself today?</h1>
        <ul>
          <li>
            <a href="#">Coffee $3.50</a>
          </li>
          <li>
            <a href="#">Ice Cream $5.50</a>
          </li>
          <li>
            <a href="#">Beer $8.00</a>
          </li>
        </ul>
        <p>Or add your own treat!</p>
        <CustomTreatForm add_treat={this.add_treat} />
      </div>
    );
  }
}

export default Home;
