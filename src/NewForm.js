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
        this.setState({ isLoading: true })

        this.loadEsfera()

        api.loadEsfera()
            .then((res) => {
                this.setState({
                    isLoading: false,
                    esferas: res.data
                })
            })
        api.loadEstado()
            .then((res) => {
                console.log(this.refs.esfera.value)
                this.setState({
                    isLoading: false,
                    estados: res.data
                })
            })
    }

    loadEsfera() {
        this.setState({ isLoading: true })
        
        console.log(this.props)
        api.loadOrgaoByEsfera(this.refs.esfera.value)
                .then((res) => {
                    this.setState({
                        isLoading: false,
                        orgaos: res.data
                    })
                })
                
        console.log(this.refs.esfera.value)
    }

    render() {
        return (
            <div className="content container">
                <div className="fundo">
                    <h2>Formulário para recurso de infrações de trânsito!</h2>
                    <form>
                        <div className="form-group">
                            <label>Esfera:</label>
                            <select id="esfera" ref="esfera" name="esfera" className="form-control">
                                { Object
                                    .keys(this.state.esferas)
                                    .map( key => <option key={key} value={this.state.esferas[key].tipo}>{this.state.esferas[key].tipo}</option>)
                                }
                            </select>
                        </div>
                        <div id="estado" className="form-group">
                            <label>Estado:</label>
                            <select id="estado" ref="estado" name="estado" className="form-control">
                                { Object
                                    .keys(this.state.estados)
                                    .map( key => <option key={key} value={key}>{this.state.estados[key].nome}</option>)
                                }
                            </select>
                        </div>
                        <div id="orgao" className="form-group">
                            <label>Órgao:</label>
                            <select id="orgao" ref="orgao" name="orgao" className="form-control">
                                { Object
                                    .keys(this.state.orgaos)
                                    .map( key => <option key={key} value={key}>{this.state.orgaos[key].nome}</option>)
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" style={{ float: 'right' }}>Gerar formulário</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}