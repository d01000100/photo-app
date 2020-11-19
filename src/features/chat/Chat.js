import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveChat, addMessage, getContacts, getSelectedContact } from './chatSlice.js'
import styles from './Chat.module.css';

function Contact(props) {
  let name = props.info.name;
  let imgSrc = props.info.image
  let initial = name[0];

  let dispatch = useDispatch();

  return (
    <li className={`list-group-item list-group-item-action ${styles.contact}`}
      onClick={() => { dispatch(setActiveChat(props.info))}}>
      <img className={styles.chatInitial} src={process.env.PUBLIC_URL + "/" + imgSrc} />
      <span>{name}</span>
    </li>
  )
}

function ContactList() {
  const contacts = useSelector(getContacts);

  return (
    <ul className="list-group">
      {contacts.map(contactData => <Contact info={contactData} />)}
    </ul>
  )
}

function Messages () {
  let selectedContact = useSelector(getSelectedContact);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{selectedContact.name}</h3>
      <h4><i>WIP</i></h4>
      <ul>
        {selectedContact.messages.map(({sender, content}) => 
          <li>
            <b>{sender == 'self' ? "Me: " : `${selectedContact.name}: `}</b>
            {content}
          </li>
        )}
      </ul>
      <a href="#" onClick={() => { dispatch(setActiveChat(null))}}><i>Back</i></a>
    </div>
  )
}

export function Chat() {
  const selectedContact = useSelector(getSelectedContact)

  return (
    <div>
      <h1>Chat</h1>
      {selectedContact == null ?
        <ContactList /> :
        <Messages />
      }
    </div>
  )
}