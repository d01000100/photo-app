import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: {
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
        ]
      },
    },
    activeChat: null,
  },
  reducers: {
    setActiveChat: (state,action) => {
      state.activeChat = action.payload
    },
    addMessage: (state,action) => {
      let messages = state.messages
      let contactInfo = messages[action.contactName]
      let newMessage = {
        sender: "self",
        content: action.messsage
      }
      if (contactInfo) {
        state.messages[action.contactName].messages.push(newMessage)
      } else {
        state.messages[action.contactName] = {
          name: action.contactName,
          messages: [newMessage]
        }
      }
    }
  }
})

export const {setActiveChat, addMessage} = chatSlice.actions;

export const getContacts = state => Object.values(state.chat.messages) //.map(({name, image}) => {name, image})
export const getSelectedContact = state => state.chat.activeChat

export default chatSlice.reducer