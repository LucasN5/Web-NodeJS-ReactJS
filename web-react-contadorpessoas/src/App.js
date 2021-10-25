import React, { Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Contador1:  0
    };

    this.somar = this.somar.bind(this);
    this.subtrair = this.subtrair.bind(this);
    
  }

  somar(){
    this.setState({ 
      Contador: this.state.Contador1++
    });

  }

  subtrair(){
    this.setState({
        Contador: this.state.Contador1--  
    });
  }

  render(){
    return(
      <div>
        <center>
          <h3><center>Contador de Pessoas</center></h3>
          <h1>{this.state.Contador1}</h1>
          <button onClick={this.somar}>  +  </button>
          <h1></h1>
          <button onClick={this.subtrair}>  -  </button>
          
        
        </center>
      </div>
    );
  }
  

}

export default App;
