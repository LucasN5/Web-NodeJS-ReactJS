import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      primeiroNumero: '',
      segundoNumero: '',
      resultado: ''
    };

    this.resultadofinal = this.resultadofinal.bind(this);
    
  } 

  resultadofinal(){
    this.setState({
      primeiroNumero: document.getElementById('um').value,
      segundoNumero: document.getElementById('dois').value,
      resultado: this.state.primeiroNumero * this.state.segundoNumero     
    }) 
  }

  

  render(){
    return(
      <center>
      <div>
        <legend>
      
          <h1>Multiplicador De Números</h1>
          </ legend>
          <div>
          <label><h3>Insira o 1º Número:</h3>
          <input type="number" name="primeiroNumero" id="um" />
          </label>
          </div>
          <div>
            <label><h3>Insira o 2º Número:</h3>
            <input type="number" name="segundoNumero" id="dois"/>
            </label>
          </div>

          <button onClick={this.resultadofinal}>Calcular</button>
          <h2>Resultado: {this.state.resultado}</h2>   
              
        </div>
      </center>  
    );
  }
}

export default App;
