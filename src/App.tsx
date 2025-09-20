import React, { useState, useEffect } from 'react';
import './App.css';
import InputForm from './components/InputForm/InputForm';
import MessageDisplay from './components/MessageDisplay/MessageDisplay';
import { useLocalStorage } from './hooks/useLocalStorage';

interface DailyRecord {
  date: string;
  things: string[];
}

interface Message {
  text: string;
  type: 'success' | 'error' | 'info';
}

function App() {

  const [thing1, setThing1] = useLocalStorage('thing1', '');
  const [thing2, setThing2] = useLocalStorage('thing2', '');
  const [thing3, setThing3] = useLocalStorage('thing3', '');
  const [message, setMessage] = useState<Message | null>(null);
  const [records, setRecords] = useLocalStorage('records', '[]');

  useEffect(() => {
    if(message) {
      const timer = setTimeout(() => {
        setMessage(null);
      },3000);
    
      return () => clearTimeout(timer);
    }
  },[message]);

  const handleRecord = () => {

    const todayThings = [thing1, thing2, thing3].filter(thing => thing.trim() !== '');

    if (todayThings.length < 3) {
      setMessage({
        text: '絶対3つはえらいがあるはず！よく思い出して',
        type: 'error'
    });
      return;
    }

    const today = new Date().toLocaleDateString('sv-SE');
    const existingRecords: DailyRecord[] = JSON.parse(records);

    const existingIndex = existingRecords.findIndex(record => record.date === today);

    const newRecord: DailyRecord = {
      date: today,
      things: todayThings,
    };

    if (existingIndex >= 0) {
      existingRecords[existingIndex] = newRecord;
      setMessage({
        text:'今日のえらいを更新しました！すごくえらい！',
        type: 'success'
    })
    } else {
      existingRecords.push(newRecord);
      setMessage({
        text: '今日のえらいを記録しました！えらい！',
        type:'success'
    })
    }

    setRecords(JSON.stringify(existingRecords));

    setThing1('');
    setThing2('');
    setThing3('');

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
        <MessageDisplay message={message} />
        <div style={{ marginTop: '2rem', textAlign: 'left'}}>
          <h2>📅 記録履歴</h2>
          {JSON.parse(records).length === 0 ? (
            <p>まだ記録がありません</p>
          ) : (
            JSON.parse(records)
            .sort((a: DailyRecord, b: DailyRecord) => b.date.localeCompare(a.date))
            .map((record: DailyRecord, index:number) => (
              <div key={index} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
                <h3>{record.date}</h3>
                <ul>
                  {record.things.map((thing, i) => (
                    <li key={i}>{thing}</li>
                  ))}
                </ul>
              </div>
            ))
          )

          }
        </div>
      </header>
    </div>
  );
}

export default App;
