import React, { Component } from 'react';
import { UpdateDateColumn } from 'typeorm';
import './App.css';


class App extends Component {

  render(){
    return(
      <div>
        <h3><center>App Meu Perfil</center></h3>
        <h1></h1>
        <center><Uepa/></center>
        <h1></h1>
        <h3><center>Dados Pessoais:</center></h3>
        <h4><center>Lucas N.</center></h4>
        <h1></h1>
        <h3><center>Formação:</center></h3>
        <h4><center>Ciência da Computação</center></h4>
        <h1></h1>
        <h3><center>Experiência:</center></h3>
        <h4><center>Javascript, Python, CSS, HTML, Java</center></h4>
        <h1></h1>
        <h3><center>Projetos:</center></h3>
        <h4><center>Web-NodeJS-Reactjs</center></h4>

      </div>
    );
  }
}

export default App;


function Uepa() {
  let img = 'https://i.ytimg.com/vi/ZoAFngyIuZY/hqdefault.jpg'
;

return(
  <img src={img} width={250} height={180} />
);

}