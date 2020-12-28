import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

import { Search } from '../features/search/Search';
import Messages from '../features/chat/Chat';
import ContactList from '../features/chat/ContactList';
import UserProfile from '../features/user_profile/UserProfile'

export default function Routes() {
  return (
    <Switch>
      <Route path="/search" exact component={Search} />
      <Route path="/chat/:username" component={Messages} />
      <Route path="/chat" exact component={ContactList} />
      <Route path="/profile/:username">
        <UserProfile />
      </Route>
      <Route component={ContactList} /> { /* Default page */ }
    </Switch>
  )
}