// import React from "react";
// import Button from "react-bootstrap/Button";
// import Table from "react-bootstrap/Table";
// import "bootstrap/dist/css/bootstrap.min.css";
// import api from "./api";

// state = {
//   dados: [],
// };

// function showDados() {
//   const response = api.get("/");

//   this.setState({ dados: response.data });
// }

// const FormDados = () => {
//   return (
//     <div className="form-content-right">
//       <form className="form">
//         <h1 className="title">Fleury Labs</h1>
//         <br />
//         <Button
//           className="btnExibir"
//           variant="outline-primary"
//           onClick={showDados}
//         >
//           Exibir Exames
//         </Button>
//       </form>
//       <br />
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Nome da Unidade</th>
//             <th>Código da Unidade</th>
//             <th>Número da Ficha</th>
//             <th>Data da Ficha</th>
//             <th>Nome Completo</th>
//             <th>Data de Nascimento</th>
//             <th>Número do Item</th>
//             <th>Sub Item</th>
//             <th>Sigla do Exame</th>
//           </tr>
//         </thead>
//         <tbody>
//           {dados.map((dado) => (
//             <tr>
//               <td>{dado.UNID_NO_UNIDADE}</td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//             </tr>
//           ))}
//           <tr>
//             <td>1</td>
//             <td>Jacob</td>
//             <td>Thornton</td>
//             <td>@fat</td>
//             <td>@fat</td>
//             <td>@fat</td>
//             <td>@fat</td>
//             <td>@fat</td>
//             <td>@fat</td>
//           </tr>          
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default FormDados;
