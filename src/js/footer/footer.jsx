import React from "react";

import Menu from "../utils/menu";

class Footer extends React.Component {
    render() {
        let menu = [
                {titulo: "home", link: "#homeFoot"},
                {titulo: "contato", link: "#contatoFoot"},
                {titulo: "sobre", link: "#sobreFoot"}
        ];
        let corFooter = "page-footer " + this.props.cor;
        return (
            <footer className={corFooter}>
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Footer Content</h5>
                            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">{this.props.titulo}</h5>
                            <Menu menu={menu}/>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2014 Copyright Text
                        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer; /*torna o modulo usavel*/