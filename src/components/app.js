import React, { Component } from 'react';
import SearchBar from './search_bar';
import UserList from './user_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <UserList/>
      </div>
    );
  }
}
