import React from "react";

class Busca extends React.Component {
    constructor (props) {
        super(props);
        this.atualizaBusca = this.atualizaBusca.bind(this);

    }
    atualizaBusca(evento) {
        this.props.atualizaBusca(evento);// acessa o metodo do list-card.jsx
    }
    render() {
        return (
            <div className="row">
                <form action="">
                    <div className="input-field col s6">
                        <input onChange={this.atualizaBusca} type="text" placeholder="Digite sua busca" value={this.props.busca}/>
                        <label >Busca</label>
                    </div>
                </form>
                <div className="row">{this.props.busca}</div>
            </div>
        );
    }
}
export default Busca;