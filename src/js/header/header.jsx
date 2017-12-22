import React from "react";

import Menu from "../utils/menu";

class Header extends React.Component {
    render() {
        let menu = [
                {titulo: "Home", link: "#home"},
                {titulo: "Contato", link: "#contato"},
                {titulo: "Sobre", link: "#sobre"}
        ];
        let corNav = "nav-wrapper " + this.props.cor;
        return (
            <nav>
                <div className={corNav}>
                    <div className="container">
                        <a href="#" className="brand-logo">{this.props.titulo}</a> {/*vem do atributo colocado na tag Header*/}
                        <Menu menu={menu}/>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header; /*torna o modulo usavel*/