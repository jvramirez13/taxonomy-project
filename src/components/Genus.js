import React from "react";

export default class Layout extends React.Component {
  render() {
    let genusList = {"Labrador": "Canis", "Shiba-Inu": "Canis", "Maltese": "Canis", "Bush Dog": "Speothos", "Darwin's Fox": "Lycalopex"}
    return (
      <div>
          <h3>Genus: {genusList[this.props.dog]}</h3>
      </div>
    );
  }
}
