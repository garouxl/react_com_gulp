import ReactDOM from "react-dom";
import React from "react";

import Main from "./main/main";
import Header from "./header/header";
import Footer from "./footer/footer";

let App = (
    <div>
        <Header titulo="React Logo" cor="red" />
        <Main titulo="Conteúdo principal" />
        <Footer titulo="React footer" cor="red" />
    </div>
);

ReactDOM.render(App, document.getElementById("app"));