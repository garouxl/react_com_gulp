import React from "react";

class Menu extends React.Component {
    constructor(props){ // contrutor para receber os props envioados como atributo ao usar a classe Menu
        super(props);
        this.state = {menuAtivo: "Home"};
        this.alteraActive = this.alteraActive.bind(this);
    }
    alteraActive(titulo, self){
        self.setState({menuAtivo: titulo});
    }

    render() {
        let self = this;
        let lista = this.props.menu.map(function (value) {
           return (
                <li key={value.titulo} onClick={self.alteraActive.bind(null,value.titulo,self)} className={self.state.menuAtivo == value.titulo ? "active" : ""} ><a className="grey-text text-lighten-3" href={value.link}>{value.titulo}</a></li>
            );
        });

        return (
            <ul id="nav-mobile" className="right">
                {lista}
            </ul>
            );
    }
}

export default Menu; /*torna o modulo usavel*/