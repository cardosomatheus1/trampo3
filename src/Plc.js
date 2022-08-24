import React, { Component } from 'react';

export default class Plc extends Component {
    state = {
        mes: '',
        ano: '',
        campanha: '',
        celulaInicial: '',
        celulaFinal: '',
        caminhos: [],
    }

    handleChange = ({ target }) => {
        const name = target.name
        const value = target.value
        this.setState({ [name]: value });
    }

    generator = () => {
        const { ano, campanha, celulaInicial } = this.state
        const array = [];
        for (let l = 1; l <= 12; l++) {
            let mes = ''
            if (l < 10) {
                mes = `0${l}`
                const data = `${mes}.${ano}`
                let mesEscrito = ''
                if (mes === '01') {
                    mesEscrito = 'JANEIRO'
                }
                else if (mes === '02') {
                    mesEscrito = 'FEVEREIRO'
                }
                else if (mes === '03') {
                    mesEscrito = 'MARÇO'
                }
                else if (mes === '04') {
                    mesEscrito = 'ABRIL'
                }
                else if (mes === '05') {
                    mesEscrito = 'MAIO'
                }
                else if (mes === '06') {
                    mesEscrito = 'JUNHO'
                }
                else if (mes === '07') {
                    mesEscrito = 'JULHO'
                }
                else if (mes === '08') {
                    mesEscrito = 'AGOSTO'
                }
                else if (mes === '09') {
                    mesEscrito = 'SETEMBRO'
                }
                else if (mes === '10') {
                    mesEscrito = 'OUTUBRO'
                }
                else if (mes === '11') {
                    mesEscrito = 'NOVEMBRO'
                }
                else if (mes === '12') {
                    mesEscrito = 'DEZEMBRO'
                }

                for (let i = 1; i <= 31; i++) {
                    let day = ''
                    if (i < 10) {
                        day = `0${i}`
                    } else {
                        day = `${i}`
                    }
                    let date = `${day}.${data}`
                    let dateOk = `${day}/${mes}/${ano}`
                    let hour = ''
                    for (let j = 16; j <= 23; j++) {
                        let dado = {}
                        if (j === 16) {
                            hour = '23'
                        } else {
                            hour = `0${j - 16}`
                        }
                        dado.hora = hour
                        dado.data = dateOk
                        let celula = `${celulaInicial}${3}`
                        let caminho = `='S:\\Producao\\PRODUÇÃO DE SBC\\${ano}\\${mesEscrito}\\${date}\\[1CAM-PRO-PAD-100-003_Rev02 Anexo XIV Relatorio de turno.xlsx]23x07'!${celula}`
                        dado.caminho1 = caminho
                        array.push(dado)
                    }
                    for (let j = 16; j <= 23; j++) {
                        let dado = {}
                        if (j > 19) {
                            hour = `0${j - 9}`
                        } else {
                            hour = `${j - 9}`
                        }
                        dado.hora = hour
                        dado.data = dateOk
                        let celula = `${celulaInicial}${3}`
                        let caminho = `='S:\\Producao\\PRODUÇÃO DE SBC\\${ano}\\${mesEscrito}\\${date}\\[1CAM-PRO-PAD-100-003_Rev02 Anexo XIV Relatorio de turno.xlsx]07x15'!${celula}`
                        dado.caminho1 = caminho
                        array.push(dado)
                    }
                    for (let j = 16; j <= 23; j++) {
                        let dado = {}
                        hour = `${j - 1}`
                        dado.hora = hour
                        dado.data = dateOk
                        let celula = `${celulaInicial}${3}`
                        let caminho = `='S:\\Producao\\PRODUÇÃO DE SBC\\${ano}\\${mesEscrito}\\${date}\\[1CAM-PRO-PAD-100-003_Rev02 Anexo XIV Relatorio de turno.xlsx]15x23'!${celula}`
                        dado.caminho1 = caminho
                        array.push(dado)
                    }
                }
            } else {
                mes = `${l}`
                const data = `${mes}.${ano}`
                let mesEscrito = ''
                if (mes === '01') {
                    mesEscrito = 'JANEIRO'
                }
                else if (mes === '02') {
                    mesEscrito = 'FEVEREIRO'
                }
                else if (mes === '03') {
                    mesEscrito = 'MARÇO'
                }
                else if (mes === '04') {
                    mesEscrito = 'ABRIL'
                }
                else if (mes === '05') {
                    mesEscrito = 'MAIO'
                }
                else if (mes === '06') {
                    mesEscrito = 'JUNHO'
                }
                else if (mes === '07') {
                    mesEscrito = 'JULHO'
                }
                else if (mes === '08') {
                    mesEscrito = 'AGOSTO'
                }
                else if (mes === '09') {
                    mesEscrito = 'SETEMBRO'
                }
                else if (mes === '10') {
                    mesEscrito = 'OUTUBRO'
                }
                else if (mes === '11') {
                    mesEscrito = 'NOVEMBRO'
                }
                else if (mes === '12') {
                    mesEscrito = 'DEZEMBRO'
                }

                for (let i = 1; i <= 31; i++) {
                    let day = ''
                    if (i < 10) {
                        day = `0${i}`
                    } else {
                        day = `${i}`
                    }
                    let date = `${day}.${data}`
                    let dateOk = `${day}/${mes}/${ano}`
                    let hour = ''
                    for (let j = 16; j <= 23; j++) {
                        let dado = {}
                        if (j === 16) {
                            hour = '23'
                        } else {
                            hour = `0${j - 16}`
                        }
                        dado.hora = hour
                        dado.data = dateOk
                        let celula = `${celulaInicial}${3}`
                        let caminho = `='S:\\Producao\\PRODUÇÃO DE SBC\\${ano}\\${mesEscrito}\\${date}\\[1CAM-PRO-PAD-100-003_Rev02 Anexo XIV Relatorio de turno.xlsx]23x07'!${celula}`
                        dado.caminho1 = caminho
                        array.push(dado)
                    }
                    for (let j = 16; j <= 23; j++) {
                        let dado = {}
                        if (j > 19) {
                            hour = `0${j - 9}`
                        } else {
                            hour = `${j - 9}`
                        }
                        dado.hora = hour
                        dado.data = dateOk
                        let celula = `${celulaInicial}${3}`
                        let caminho = `='S:\\Producao\\PRODUÇÃO DE SBC\\${ano}\\${mesEscrito}\\${date}\\[1CAM-PRO-PAD-100-003_Rev02 Anexo XIV Relatorio de turno.xlsx]07x15'!${celula}`
                        dado.caminho1 = caminho
                        array.push(dado)
                    }
                    for (let j = 16; j <= 23; j++) {
                        let dado = {}
                        hour = `${j - 1}`
                        dado.hora = hour
                        dado.data = dateOk
                        let celula = `${celulaInicial}${3}`
                        let caminho = `='S:\\Producao\\PRODUÇÃO DE SBC\\${ano}\\${mesEscrito}\\${date}\\[1CAM-PRO-PAD-100-003_Rev02 Anexo XIV Relatorio de turno.xlsx]15x23'!${celula}`
                        dado.caminho1 = caminho
                        array.push(dado)
                    }
                }
            }
        }
        this.setState({ caminhos: array })
    }


    render() {
        const { caminhos } = this.state
        return (
            <div>
                <h1>Caminho PLC SBC</h1>
                <div>
                    <form>
                        <label HtmlFor="ano">Ano
                            <input
                                type="text"
                                name="ano"
                                id="ano"
                                onChange={this.handleChange}
                            >
                            </input>
                        </label>
                        <div>
                            <label HtmlFor="campanha">Campanha
                                1E
                                <input
                                    type="radio"
                                    name="campanha"
                                    id="campanha"
                                    value="1E"
                                    onChange={this.handleChange}
                                >
                                </input>
                                4G
                                <input
                                    type="radio"
                                    name="campanha"
                                    id="campanha"
                                    value="4G"
                                    onChange={this.handleChange}
                                >
                                </input>
                                4HS
                                <input
                                    type="radio"
                                    name="campanha"
                                    id="campanha"
                                    value="4HS"
                                    onChange={this.handleChange}
                                >
                                </input>
                            </label>
                        </div>
                        <label HtmlFor="celulaInicial">Letra da celula
                            <input
                                type="text"
                                name="celulaInicial"
                                id="celulaInicial"
                                onChange={this.handleChange}
                            >
                            </input>
                        </label>

                        <button type="button" id="button" onClick={this.generator}>Gerar caminho</button>
                    </form>
                    <p>R = TIC-180  X=FIC-164  AA=LIC-161  AD=PTR-101  AG=TI-165  AJ=TI-177  AM=TI-171  AP=TI-162  AS=LIC-167  AV=FTR-101  AY=TI-176  BB=FIC-173A  BE=FIC-173B BH=FIC-169 BK=TIC-170 BN=FIC-175 CL=TIC-182A  CO=TIC-182B</p>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <div className='table'>
                                    {caminhos.map(((caminho) =>
                                        <div className="container">
                                            <td>{caminho.caminho1}</td>
                                        </div>
                                    ))}
                                </div>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>

        );
    }
}
