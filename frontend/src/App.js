import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "./api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisorActive: false,
      dados: [],
    };
  }

  showDados = async () => {
    const response = await api.get("/numero_ficha");

    this.setState({ dados: response.data });
  };

  render() {
    return (
      <div className="form-content-right">
        <form className="form">
          <h1 className="title">Fleury Labs</h1>
          <br />
          <Button
            className="btnExibir"
            variant="outline-primary"
            onClick={this.showDados}
          >
            Exibir Exames
          </Button>
        </form>
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nome da Unidade</th>
              <th>Código da Unidade</th>
              <th>Número da Ficha</th>
              <th>Data da Ficha</th>
              <th>Nome Completo</th>
              <th>Data de Nascimento</th>
              <th>Número do Item</th>
              <th>Sub Item</th>
              <th>Sigla do Exame</th>
            </tr>
          </thead>
          <tbody>
            {this.state.dados.map((dado, index) => (
              <tr key={index}>
                <td>{dado.UNID_NO_UNIDADE}</td>
                <td>{dado.ID_UNID_CD_UNIDADE}</td>
                <td>{dado.ID_FICH_NR_FICHA}</td>
                <td>
                  {" "}
                  {new Date(dado.ID_FICH_NR_FICHA).toLocaleDateString()} -{" "}
                  {new Date(dado.ID_FICH_NR_FICHA).toLocaleTimeString()}
                </td>
                <td>{dado.PEFI_NO_NOME + dado.PEFI_NO_SOBRENOME}</td>
                <td>
                  {new Date(dado.PEFI_DH_NASCIMENTO).toLocaleDateString()}
                </td>
                <td>{dado.ID_ITEM_NR_ITEM}</td>
                <td>{dado.ID_ITEM_NR_SUBITEM}</td>
                <td>{dado.PROD_SL_EXAME}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
