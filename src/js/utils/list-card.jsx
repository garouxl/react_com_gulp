import React from "react";

import Card from "../utils/card";
import Busca from "../busca/busca";

class ListCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {cliques: 0, busca: "", dados: [], servidor: []};
        this.addClick = this.addClick.bind(this);
        this.atualizaBusca = this.atualizaBusca.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    addClick() {
        //this.setState({cliques: this.state.cliques + 1});
        this.setState((prevState)=>({
            cliques: prevState.cliques + 1 // maneira recomendad com ES6 pelo reactjs
        }))
    }
    atualizaBusca(evento) {
        this.setState({busca: evento.target.value});
        if (evento.target.value === "") {
            this.setState({dados: this.state.servidor});
        }
    }
    onSubmit(evento) {
        let busca = this.state.busca;
        let dados = this.state.servidor;
        let novaLista = dados.filter(function(item) {
            if (item.titulo.toUpperCase().indexOf(busca.toUpperCase()) > -1 ||
                item.descricao.toUpperCase().indexOf(busca.toUpperCase()) > -1 ||
                item.detalhe.toUpperCase().indexOf(busca.toUpperCase()) > -1) {
                return item;
            }
        });
        this.setState({dados: novaLista});
        evento.preventDefault();
    }
    componentDidMount(){
        this.setState({
            dados:[
                {titulo: "Titulo 1", descricao: "Lorem ipsum 1", detalhe:"Detalhe lorem ipsum 1", imagem:"http://www.comiccovers.blog/wp-content/uploads/2017/02/Captain-Marvel-5-480x640.jpg", link:"#"},
                {titulo: "Titulo 2", descricao: "Lorem ipsum 2", detalhe:"Detalhe lorem ipsum 2", imagem:"https://f.ptcdn.info/493/050/000/ooenvymbyNLj78G03Uw-o.jpg", link:"#"},
                {titulo: "Titulo 3", descricao: "Lorem ipsum 3", detalhe:"Detalhe lorem ipsum 3", imagem:"https://static1.comicvine.com/uploads/scale_small/0/4/13348-2690-14968-1-haunt-of-horror.jpg", link:"#"},
                {titulo: "Titulo 4", descricao: "Lorem ipsum 4", detalhe:"Detalhe lorem ipsum 4", imagem:"https://static.giantbomb.com/uploads/scale_small/0/26/941892-gijoe_arc_flyer1.jpeg", link:"#"},
                {titulo: "Titulo 5", descricao: "Lorem ipsum 5", detalhe:"Detalhe lorem ipsum 5", imagem:"https://f.ptcdn.info/493/050/000/ooenvymbyNLj78G03Uw-o.jpg", link:"#"},
                {titulo: "Titulo 6", descricao: "Lorem ipsum 6", detalhe:"Detalhe lorem ipsum 6", imagem:"https://static1.comicvine.com/uploads/scale_small/0/4/13348-2690-14968-1-haunt-of-horror.jpg", link:"#"},
                {titulo: "Titulo 7", descricao: "Lorem ipsum 7", detalhe:"Detalhe lorem ipsum 7", imagem:"https://static.giantbomb.com/uploads/scale_small/0/26/941892-gijoe_arc_flyer1.jpeg", link:"#"},
                {titulo: "Titulo 8", descricao: "Lorem ipsum 8", detalhe:"Detalhe lorem ipsum 8", imagem:"http://www.comiccovers.blog/wp-content/uploads/2017/02/Captain-Marvel-5-480x640.jpg", link:"#"}
            ],
            servidor:[
                {titulo: "Titulo 1", descricao: "Lorem ipsum 1", detalhe:"Detalhe lorem ipsum 1", imagem:"http://www.comiccovers.blog/wp-content/uploads/2017/02/Captain-Marvel-5-480x640.jpg", link:"#"},
                {titulo: "Titulo 2", descricao: "Lorem ipsum 2", detalhe:"Detalhe lorem ipsum 2", imagem:"https://f.ptcdn.info/493/050/000/ooenvymbyNLj78G03Uw-o.jpg", link:"#"},
                {titulo: "Titulo 3", descricao: "Lorem ipsum 3", detalhe:"Detalhe lorem ipsum 3", imagem:"https://static1.comicvine.com/uploads/scale_small/0/4/13348-2690-14968-1-haunt-of-horror.jpg", link:"#"},
                {titulo: "Titulo 4", descricao: "Lorem ipsum 4", detalhe:"Detalhe lorem ipsum 4", imagem:"https://static.giantbomb.com/uploads/scale_small/0/26/941892-gijoe_arc_flyer1.jpeg", link:"#"},
                {titulo: "Titulo 5", descricao: "Lorem ipsum 5", detalhe:"Detalhe lorem ipsum 5", imagem:"https://f.ptcdn.info/493/050/000/ooenvymbyNLj78G03Uw-o.jpg", link:"#"},
                {titulo: "Titulo 6", descricao: "Lorem ipsum 6", detalhe:"Detalhe lorem ipsum 6", imagem:"https://static1.comicvine.com/uploads/scale_small/0/4/13348-2690-14968-1-haunt-of-horror.jpg", link:"#"},
                {titulo: "Titulo 7", descricao: "Lorem ipsum 7", detalhe:"Detalhe lorem ipsum 7", imagem:"https://static.giantbomb.com/uploads/scale_small/0/26/941892-gijoe_arc_flyer1.jpeg", link:"#"},
                {titulo: "Titulo 8", descricao: "Lorem ipsum 8", detalhe:"Detalhe lorem ipsum 8", imagem:"http://www.comiccovers.blog/wp-content/uploads/2017/02/Captain-Marvel-5-480x640.jpg", link:"#"}
            ]
        })
    }
    render() {
        let noticias = this.state.dados;
        let aux = [], novaLista = [];
        for(let k = 0; k < noticias.length; k++) {
            aux.push(noticias[k]);
            if (aux.length == this.props.dtqLinha){
                novaLista.push(aux);
                aux = [];
            }else if(k == noticias.length-1) {
                novaLista.push(aux);
            }
        }
        let tamanhoCol = "col m" + this.props.tamanhoCol;
        let listaCartoes = function (grupo, self) {
            return grupo.map(function (item,index) {
                return (
                    <div key={index} className={tamanhoCol}>
                        <Card dados={item} addClick={self.addClick} />
                    </div>
                );
            })
        }
        let self = this;
        let linha = novaLista.map(function (grupo,index) {
            return (
               <div key={index} className="row">
                   { listaCartoes(grupo, self) }
               </div>
            )
         })
        return (
            <div>
                <div className="row">
                    <Busca atualizaBusca={this.atualizaBusca} onSubmit={this.onSubmit} busca={this.state.busca}/>
                </div>
                <p>Quantidade de cliques: {this.state.cliques}</p>
                {linha}
            </div>
        );
    }
}

export default ListCard; /*torna o modulo usavel*/