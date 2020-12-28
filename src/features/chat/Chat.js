import React,{ useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useParams} from 'react-router-dom'
import { setActiveChat, addMessage, getContact as getSelectedContact } from './chatSlice.js'
import styles from './Chat.module.css';

let {chatMessage, messageSelf, messageOther, chat} = styles

function Input() {

  let [inputText, setInputText] = useState('')

  let {name} = useSelector(getSelectedContact);

  let dispatch = useDispatch();

  function sendMessage() {
    let message = inputText.trim()
    if (message == "") return
    dispatch(addMessage({recipient: name, content: message}))
    setInputText('')
  }

  return (
    <div className="input-group">
      <input className="form-control" type="text"
        value={inputText} onChange={(event) => {setInputText(event.target.value)}}
        onKeyUp={(event) => {
          if (event.key == "Enter") {
            sendMessage()
          }
        }}
      ></input>
      <div className="input-group-append input-group-sm" onClick={sendMessage}>
        <span className="input-group-text">
          <img className="icon" src={`${process.env.PUBLIC_URL}/svg/sent.svg`}
            alt="Send icon"></img>
        </span>
      </div>
    </div>
  )
}

export default function Messages () {

  const dispatch = useDispatch();
  let {username} = useParams()
  dispatch(setActiveChat({username: username}))
  let {name, image, messages} = useSelector(getSelectedContact);

  let scrollWindow = React.createRef();

  useEffect(() => {
    scrollWindow.current.scrollTop = scrollWindow.current.scrollHeight
  }, [messages])

  return (
    <div>
      <h3>{name}</h3>
      <Link to="/chat">
        <i>{"< All messages"}</i>
      </Link>
      <div className={`${chat} scroll`} ref={scrollWindow}>
        {messages.map(({sender, content}, index) => 
          <div key={index} className={`${chatMessage} ${sender == 'self' ? messageSelf : messageOther}`}>
            {content}
          </div>
        )}
      </div>
      <Input />
    </div>
  )
}