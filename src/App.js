import React, { Component } from 'react';
import './App.css';
import Header from './Layout/Header';
import Left from './Layout/Left';
import Content from './Layout/Content';
import Right from './Layout/Right';
import Footer from './Layout/Footer';

class App extends Component {
  render() {
    return (

<div>
<Header></Header>
<Left></Left>
<Content></Content>
<Right></Right>
<Footer></Footer>
</div>

    );
  }
}

export default App;
