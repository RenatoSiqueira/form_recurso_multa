import React, { Component } from 'react'
import api from './Api'

export default class NewForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            esferas: [],
            estados: [],
            orgaos: [],
            isLoading: false
        }

        this.loadEsfera = this.loadEsfera.bind(this)
    }

    componentDidMount() {
        console.log(this.props)
        this.setState({ isLoading: true })

        // 
        /**
         * Removi a loadEsfera daqui
         */
        api.loadEsfera()
            .then((res) => {
                this.setState({
                    isLoading: false,
                    esferas: res.data
                })
            })
        api.loadEstado()
            .then((res) => {
                this.setState({
                    isLoading: false,
                    estados: res.data
                })
            })
    }

    loadEsfera() {
        this.setState({ isLoading: true })
        console.log('esfera', this.refs.esfera.value)
        console.log('estado', this.refs.estado.value)
        console.log(this.props)
        api.loadOrgaoByEsfera(this.refs.esfera.value)
            .then((res) => {
                this.setState({
                    isLoading: false,
                    orgaos: res.data
                })
            })
    }

    render() {
        return (
            <div className="content container">
                <div className="fundo">
                    <h2>Formulário para recurso de infrações de trânsito!</h2>
                    <div className="form-group">
                        <label>Esfera:</label>
                        {/**
                         * Adicionei o onBlur ali pra ele setar o ref=esfera e executar o loadEsfera() quando tirar do foco.
                         */}
                        <select id="esfera" ref="esfera" name="esfera" className="form-control" onBlur={this.loadEsfera}>
                            {Object
                                .keys(this.state.esferas)
                                .map(key => <option key={key} value={this.state.esferas[key].tipo}>{this.state.esferas[key].tipo}</option>)
                            }
                        </select>
                    </div>
                    <div id="estado" className="form-group">
                        <label>Estado:</label>
                        {/**
                         * Adicionei o onBlur ali pra ele setar o ref=esfera e executar o loadEsfera() quando tirar do foco.
                         */}
                        <select id="estado" ref="estado" name="estado" className="form-control" onBlur={this.loadEsfera}>
                            {Object
                                .keys(this.state.estados)
                                .map(key => <option key={key} value={key}>{this.state.estados[key].nome}</option>)
                            }
                        </select>
                    </div>
                    <div id="orgao" className="form-group">
                        <label>Órgao:</label>
                        <select id="orgao" ref="orgao" name="orgao" className="form-control">
                            {Object
                                .keys(this.state.orgaos)
                                .map(key => <option key={key} value={key}>{this.state.orgaos[key].nome}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" style={{ float: 'right' }}>Gerar formulário</button>
                    </div>
                </div>
            </div>
        )
    }
}