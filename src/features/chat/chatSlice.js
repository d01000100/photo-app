import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    allMessages: {
      "Roberto Meléndez": {
        name: "Roberto Meléndez",
        image: "img/coons/photo_2020-11-14_15-17-33.jpg",
        messages: [
          {
            sender: "other",
            content: "Hello man, how are you?"
          },
          {
            sender: "self",
            content: "Good, you?"
          },
          {
            sender: "other",
            content: "Not bad"
          },
        ]
      },
      "Bruce Stevenson": {
        name: "Bruce Stevenson",
        image: "img/frogs/photo_2020-11-18_19-20-43.jpg",
        messages: [
          {
            sender: "other",
            content: "Hello man, what's going on!?"
          },
          {
            sender: "self",
            content: "Nothing much, what's going on with you?"
          },
          {
            sender: "other",
            content: "I tell you what's going on!!"
          },
          {
            sender: "other",
            content: "The budget was 500 and now it's 200!!"
          },
          {
            sender: "self",
            content: "It’s been more than a decade since the first of the films in Peter Jackson’s Lord of the Rings trilogy was released, and although fans are now eagerly anticipating a return to Middle-earth with his upcoming Hobbit films, well, one does NOT simply walk away from where it all began. Today, we feature an article written for TheOneRing.net by guest author Leslie Martinka, Marketing Manager at Hark.com, the world’s largest platform for pop culture quotes and images, on the phenomenon that is Tolkien’s Lord of the Rings, and the top 20 quotes from Peter Jackson’s films:"
          },
        ]
      },
    },
    activeChat: null,
  },
  reducers: {
    setActiveChat: (state,{payload}) => {
      if (payload === null) {
        state.activeChat = null
        return
      }
      let {username} = payload
      state.activeChat = username
    },
    addMessage: (state,{payload}) => {
      let {recipient,content} = payload
      console.log(`Payload is ${JSON.stringify(payload)}`)
      let chats = state.allMessages
      let contactInfo = chats[recipient]
      let newMessage = {
        sender: "self",
        content: content
      }
      if (contactInfo) {
        state.allMessages[recipient].messages.push(newMessage)
      } else {
        state.allMmessages[recipient] = {
          name: recipient,
          messages: [newMessage]
        }
      }
    }
  }
})

export const {setActiveChat, addMessage} = chatSlice.actions;

export const getAllContacts = ({chat: {allMessages}}) => Object.values(allMessages) //.map(({name, image}) => {name, image})
export const getContact = ({chat: {activeChat, allMessages}}) => allMessages[activeChat]

export default chatSlice.reducer