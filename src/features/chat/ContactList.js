import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { getAllContacts } from './chatSlice.js'
import styles from './Chat.module.css';

function Contact(props) {
  let name = props.info.name;
  let imgSrc = props.info.image

  return (
    <Link to={`/chat/${name}`}>
      <li className={`list-group-item list-group-item-action ${styles.contact}`}>
        <img className={styles.chatInitial} src={process.env.PUBLIC_URL + "/" + imgSrc}
          alt={`${name}'s profile icon`} />
        <span>{name}</span>
      </li>
    </Link>
  )
}

export default function ContactList() {
  const contacts = useSelector(getAllContacts);

  return (
    <ul className="list-group">
      {contacts.map(contactData => <Contact info={contactData} />)}
    </ul>
  )
}