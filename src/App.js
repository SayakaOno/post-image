import react, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import Form from './Form';
import Display from './Display';
import './App.css';

function App() {
  const [text, setText] = useState('');

  return (
    <div className="App">
      <Form text={text} setText={setText} />
      <Display text={text} />
    </div>
  );
}

export default App;
