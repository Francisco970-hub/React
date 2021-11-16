/* eslint-disable no-unused-vars */
import logo from './logo.svg';

import Message from '../src/components/message/message.component'

import './App.css';
import React, { useState } from "react";

import {Switch, Route} from 'react-router-dom';

import LogIn from './pages/Log-In-Page/logIn.component';

import SignInOut from './pages/Sign-In-Page/SignRes.component';

import  { useEffect } from "react";

import { subscribeToTopic } from "./utils/firebase";

import { BroadCastChannel } from 'broadcast-channel';

import {Admin,Resource,ListGuesser} from 'react-admin';

import authProvider from './components/authProvider'

import lb4Provider from 'react-admin-lb4';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

//import GetUsers from './components/new comps/getUsers'

import { UsersCreate, UsersEdit, UsersList } from './components/new comps/users'

import { TasksCreate, TasksEdit, TasksList } from './components/new comps/tasks'

import { MensagensCreate, MensagensEdit, MensagensList } from './components/new comps/mensagens'

import Calendar from './components/calendar/calendar';

//const dataProvider = lb4Provider('http://localhost:3000');

function App() {

  /*function topicOnMessageHandler(message) {
    const fcmChannel = new BroadcastChannel("fcm-channel");
    fcmChannel.postMessage(message);
  }
   
  useEffect(() => {
    subscribeToTopic("LOGROCKET_PUB_SUB_TOPICS", topicOnMessageHandler).then();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    const fcmChannel = new BroadcastChannel("fcm-channel");
  fcmChannel.onmessage = (message) => console.log(message);
}, []);*/


  return (
    //<AmplifySignOut />
    <Admin authProvider={authProvider} dataProvider={(lb4Provider('http://localhost:3000'))}>
      <Resource name="users" list={UsersList} create={UsersCreate} edit={UsersEdit} />
      <Resource name="tasks" list={TasksList} create={TasksCreate} edit={TasksEdit} />
      <Resource name="mensagens" list={MensagensList} create={MensagensCreate} edit={MensagensEdit} />
      <Resource name="Calendario" list={Calendar} />  
      <Resource name="GlobalChat" list={Message} />
      <div>
        <Switch>
          <Route exact path='/' component={SignInOut} />
          <Route  path='/chat' component={LogIn} />
        </Switch>
      </div> 
      </Admin>
  );
}

export default (App);

