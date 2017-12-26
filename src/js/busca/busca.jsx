import React from "react";

class Busca extends React.Component {
    constructor (props) {
        super(props);
        this.atualizaBusca = this.atualizaBusca.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    atualizaBusca(evento) {
        this.props.atualizaBusca(evento);// acessa o metodo do list-card.jsx
    }
    onSubmit(evento){
            this.props.onSubmit(evento);
    }
    render() {
        return (
            <div className="row">
                <form onSubmit={this.props.onSubmit} action="">
                    <div className="input-field col s6">
                        <input onChange={this.atualizaBusca} type="text" placeholder="Digite sua busca" value={this.props.busca}/>
                        <label >Busca</label>
                    </div>
                </form>
            </div>
        );
    }
}
export default Busca;