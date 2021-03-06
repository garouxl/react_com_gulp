import React from "react";

import ListCard from "../utils/list-card";

class Card extends React.Component {
    constructor(props) { // esse props é o self de list card
        super(props);
        this.countClick = this.countClick.bind(this);
    }
    countClick() {
        this.props.addClick();
    }
    render() {
        return (
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img onClick={this.countClick} className="activator" src={this.props.dados.imagem} />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{this.props.dados.titulo}<i className="material-icons right">more_vert</i></span>
                    <p><a href={this.props.dados.link}>Ver mais...</a></p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{this.props.dados.titulo}<i className="material-icons right">close</i></span>
                    <p>{this.props.dados.detalhe}</p>
                </div>
            </div>
        );
    }
}

export default Card; /*torna o modulo usavel*/