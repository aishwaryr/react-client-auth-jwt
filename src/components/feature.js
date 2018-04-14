import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Feature extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    return (
      <div>
        <p>
          <strong>Welcome to the secure page!</strong>
        </p>
        <br />
        <p>{this.props.message}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.auth.message
  };
}

export default connect(mapStateToProps, actions)(Feature);
