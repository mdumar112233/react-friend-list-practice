import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import FriendList from './components/friend-list/FriendList';

function App() {
    const mainStyle= {
      margin: 0,
      padding: 0
    }
  return (
    <div style={mainStyle} className='main'>
      <Header></Header>
      <FriendList></FriendList>
    </div>
  );
}



export default App;
