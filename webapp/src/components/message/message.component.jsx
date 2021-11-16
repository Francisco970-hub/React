/* eslint-disable no-unused-vars */
import React, { Component } from "react";

import Button from "../button/button.component";

import "./message.style.scss";

import Axios from "axios";

//import  fMessaging  from "../../utils/firebase";

import firebase from "firebase/compat/app";
import messaging from "firebase/compat/messaging";

import firebaseConfig from "../../utils/firebaseConfig";

class Message extends Component {
  constructor(props) {
    super(props);

    this.getMessage();
    
    this.getName();

    this.state = {
      title: "YOU ARE LOGGED IN",
      message: "",
      name: "",
      id: 0,
      messages: [],
      validade:'empty'
    };

    console.log(this.state.validade);
  }

  componentDidMount() {
    this.messageHandler();

    setTimeout(() => this.setState({ title: "" }), 2000);
  }

  getName = async (event) => {
    const token = localStorage.getItem("token");
    var Uname = "";
    await Axios.get("http://localhost:5000/isUserAuth", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.data.authenticated) {
        Uname = res.data.user.email;
        this.setState({ name: Uname });
      } else {
        console.log("User not Authencticated");
      }
    });
  };

  getMessage = async (event) => {
    await Axios.get("http://localhost:5000/getmessages").then((res) => {
      const array = res.data.result;
      this.setState({ messages: array }, () => console.log(""));
    });
  };

  handleSubmit = async (event) => {
    if (this.state.message === "") console.log(Error("Invalid message"));
    else
      await Axios.post("http://localhost:5000/send", {
        name: this.state.name,
        message: this.state.message,
      }).then((res) => {
        this.setState({validade:res.data})
        //console.log(this.state.validade);
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
    });
  };

  messageHandler = (event) => {
    const app = firebase.initializeApp(firebaseConfig);
     const fMessaging = app.messaging();

    fMessaging.onMessage(
      (payload) => {
        this.getMessage();
        console.log('new message');
        alert('New message');
        /*var messages=this.state.messages;
        messages.push({id:messages.length,mensagem:payload.notification.body,user_name:payload.notification.title})
        this.setState({messages: messages});
        console.log(this.state.messages);*/
      },
      (error) => {
        console.log(error);
      }
    );
  }

  render() {
    return (
      <div>
        <h1 id="title">{this.state.title}</h1>
        <div className="well"> 
          <div className="cont">
            {this.state.messages.map((item, index) => {
              return (
                <div className="mensagens">
                  <h5 className="conteudo" key={index}>
                    {item.user_name.toUpperCase()}: '{item.mensagem}
                  </h5>
                </div>
              );
            })}
          </div>
          <h2 className="t2">Leave a Message:</h2>
          <div role="form" className="form">
            <div className="t2">
              <div>
                <h3>{this.state.name}</h3>
                <textarea
                  className="textarea"
                  ref="content"
                  type="text"
                  name="message"
                  rows="3"
                  placeholder="Leave your message here"
                  onChange={this.handleChange}
                  value={this.message}
                />
              </div>
              <Button type="submit" className="t2" onClick={this.handleSubmit}>
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
