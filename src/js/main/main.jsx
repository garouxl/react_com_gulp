import React from "react";

import ListCard from "../utils/list-card";

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {hora: new Date()};
        //this.teste; // declara o metodo novo
    }
    /*teste(test) { // o metodo
        console.log(test);
    }*/
    atualizarSegundos() {
        this.setState({ hora: new Date()})
    }
    componentDidMount() {
        this.horaID = setInterval(
            ()=> this.atualizarSegundos(), 1000
        );
        //this.teste("teste");//como chamar o metodo
    }
    componentWillUnMount(){
        clearInterval(this.horaID); //não é utilizado
    }
    render() {
        return (
            <main className="container">
                <h1>{this.props.titulo}</h1>
                <ListCard qtdLinha="4" tamanhoCol="3"/>
                <h6 className="row">Hora: {this.state.hora.toLocaleTimeString()}</h6>
            </main>
        );
    }
}

export default Main; /*torna o modulo usavel*/