import React from "react";
import Family from './Family.js'
import Genus from './Genus.js'
import BushDog from './bushDog.jpg'
import Shiba from './shiba.jpg'
import Labrador from './labrador.jpg'
import Maltese from './maltese.jpg'
import DarwinFox from './DarwinFox.jpg'

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state = {
          dogs: ["Labrador", "Shiba-Inu", "Maltese", "Bush Dog", "Darwin's Fox"],
          count: 0,
          dogPics: [Labrador, Shiba, Maltese, BushDog, DarwinFox]
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
      this.setState({count: (this.state.count + 1) % this.state.dogs.length});
    }

  render() {
    return (
      <div>
        <h1>{this.state.dogs[this.state.count]}</h1>
        <img src = {this.state.dogPics[this.state.count]}></img>
        <Family dog = {this.state.dogs[this.state.count]}/>
        <Genus dog = {this.state.dogs[this.state.count]}/>
        <input type="button" value = "Click me for a new Dog!" onClick={this.handleClick}></input>
      </div>
    );
  }
}
