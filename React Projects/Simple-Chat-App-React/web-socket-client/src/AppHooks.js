import './App.css';
import React, { useState, useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { Card, Avatar, Input, Typography } from 'antd';
import 'antd/dist/antd.css';

const { Search } = Input;
const { Text } = Typography;
const { Meta } = Card;

const client = new W3CWebSocket('ws://127.0.0.1:8000');

function App() {

  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [messagesArray, setMessagesArray] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    client.onopen = () => {
      console.log('Websocket Client Connected');
    };
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      console.log('got reply! ', dataFromServer);
      if (dataFromServer.type === "message") {
        setMessagesArray([...messagesArray, {
          msg: dataFromServer.msg,
          user: dataFromServer.user
        }]);
      }
    };
  }, []);

  const onButtonClicked = (value) => {
    client.send(JSON.stringify({
      type: "message",
      msg: value,
      user: username
    }));
    setSearchValue("");
  };

  return (
    <div className="App">
      {isLoggedIn ? 
      <div>
        <div className="title">
          <Text id="main-heading" type="secondary" style={{ fontSize: '36px' }}>Websocket Chat: {username}</Text>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: 50 }} id="messages">
          {console.log(messagesArray)}
          {[...messagesArray].map(messageItem => 
            <Card key={messageItem.msg} style={{ width: 300, margin: '16px 4px 0 4px', alignSelf: username === messageItem.user ? 'flex-end' : 'flex-start' }} loading={false}>
              <Meta
                avatar={
                  <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{messageItem.user[0].toUpperCase()}</Avatar>
                }
                title={messageItem.user+":"}
                description={messageItem.msg}
              />
            </Card> 
          )}
        </div>
        <div className="bottom">
          <Search
            placeholder="input message and send"
            enterButton="Send"
            value={searchValue}
            size="large"
            onChange={(event) => {
              setSearchValue(event.target.value)
            }}
            onSearch={(value) => {
              onButtonClicked(value)
            }}
          />
        </div> 
      </div>
      :
        <div style={{padding: "200px 40px"}}>
          <Search
            placeholder="Enter username"
            enterButton="Login"
            size="large"
            onSearch={(value) => {
              setIsLoggedIn(true)
              setUsername(value)
            }}
          />
        </div>
      }
      
    </div>
  );
}

export default App;
