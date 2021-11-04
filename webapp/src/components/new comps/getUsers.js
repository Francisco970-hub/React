import * as React from "react";
//import { List, Datagrid, TextField, DateField, BooleanField } from 'react-admin';
import Axios from "axios";

class Users extends React.Component {
    constructor(props) {
        super(props);
        
        this.getUsers();

        this.state = {
          users:[]
        };
      }

     getUsers = async (event) => {
      await Axios.get("http://localhost:5000/getUsers")
      .then((res) => {
        const array = res.data.result;
        this.setState({ users: array });
      });
  };

     render(){
    return (
          <div>
          <h1 id="title">Lista de Utilizadores Existentes</h1>
          <div className="well"> 
          <div className="cont">
            {this.state.users.map((item, id) => {
              return (
                <div className="mensagens">
                  <h5 className="conteudo" key={id}>
                    {item.email}
                  </h5>
                </div>
              );
            })}
            </div>
          </div>
        </div>

    );
     }
}

export default Users;