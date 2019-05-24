import React from "react";

export default class Layout extends React.Component {

  render() {
    let familyList = {"Labrador": "Canidae", "Shiba-Inu": "Canidae", "Maltese": "Canidae", "Bush Dog": "Canidae", "Darwin's Fox": "Canidae"}
    return (
      <div>
          <h2>Family: {familyList[this.props.dog]}</h2>
      </div>
    );
  }
}
