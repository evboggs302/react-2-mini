import React, { Component } from "react";

export default class ColorChanger extends Component {
  render() {
    return (
      <select
        disabled={this.props.allowEdit === false}
        onChange={event => this.props.update(parseInt(event.target.value, 10))}
        className="dropDownContainer"
      >
        <option value="12"> 12 </option>
        <option value="13"> 13 </option>
        <option value="14"> 14 </option>
      </select>
    );
  }
}
