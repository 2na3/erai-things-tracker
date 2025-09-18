import React, { useState, useEffect } from 'react';
import './App.css';
import InputForm from './components/InputForm';

function App() {

  const [thing1, setThing1] = useState('');
  const [thing2, setThing2] = useState('');
  const [thing3, setThing3] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if(message) {
      const timer = setTimeout(() => {
        setMessage('');
      },3000);
    
      return () => clearTimeout(timer);
    }
  },[message]);

  const handleRecord = () => {
    setThing1('');
    setThing2('');
    setThing3('');
    setMessage('記録しました！');

  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>3つのえらいことログ</h1>
        <p>今日やったえらいことを3つ記録しましょう！</p>
        <InputForm
          thing1={thing1}
          thing2={thing2}
          thing3={thing3}
          setThing1={setThing1}
          setThing2={setThing2}
          setThing3={setThing3}
          onRecord={handleRecord}
        />
        {message && <p style={{color: 'green'}}>{message}</p>}
        <p>えらいこと1:{thing1 || "えらいことを入力してね"}</p>
        <p>えらいこと2:{thing2 || "えらいことを入力してね"}</p>
        <p>えらいこと3:{thing3 || "えらいことを入力してね"}</p>
      </header>
    </div>
  );
}

export default App;
