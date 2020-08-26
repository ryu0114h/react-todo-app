import React from 'react';
import './App.css';
import AddForm from './components/AddForm';
import Item from './components/Item';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="App">
      <h1>React Todo App</h1>
      <AddForm />
      <hr />
      {/* <Tabs /> */}
      <Item />
    </div>
  );
}
export default App;
