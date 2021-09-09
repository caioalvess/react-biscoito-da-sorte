import Biscoito from "./assets/biscoito.png";
import React, { Component } from "react";
import Button from "./Button/Button";
import "./style.css";
import Footer from "./Footer/Footer";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.frases = [
      "A vida trará coisas boas se tiveres paciência.",
      "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
      "Não compense na ira o que lhe falta na razão.",
      "Defeitos e virtudes são apenas dois lados da mesma moeda.",
      "A maior de todas as torres começa no solo.",
      "Não há que ser forte. Há que ser flexível.",
      "Gente todo dia arruma os cabelos, por que não o coração?",
      "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
    ];
    this.handleFrase = this.handleFrase.bind(this);
  }

  handleFrase() {
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.frase = `" ${this.frases[numeroAleatorio]} "`;
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <h1>Biscoito da Sorte</h1>
        <img src={Biscoito} alt="" className="img" />
        <Button handleClick={this.handleFrase} nome="Abrir Biscoito" />
        <h3 className="frase">{this.state.frase}</h3>
        <Footer />
      </div>
    );
  }
}

export default App;
