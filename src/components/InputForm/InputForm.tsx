import React, { useState } from 'react';
import styles from './InputForm.module.css'

interface InputFormProps {
  thing1: string;
  thing2: string;
  thing3: string;
  setThing1: (value:string) => void;
  setThing2: (value:string) => void;
  setThing3: (value:string) => void;
  onRecord: () => void;
}

const InputForm = ({thing1, thing2, thing3, setThing1, setThing2, setThing3, onRecord}:InputFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRecord();
  };

  return (
    <form aria-label='えらいこと入力フォーム' className={styles.container} onSubmit={handleSubmit}>
      <input 
        aria-label='１つ目のえらいこと'
        value={thing1} 
        onChange={(e) => setThing1(e.target.value)}
        placeholder='例：早寝できた'
        className={styles.input}
      />
      <input 
        aria-label='2つ目のえらいこと'
        value={thing2} 
        onChange={(e) => setThing2(e.target.value)}
        placeholder='例：ジムで運動できた'
        className={styles.input}
      />
      <input 
        aria-label='3つ目のえらいこと'
        value={thing3} 
        onChange={(e) => setThing3(e.target.value)}
        placeholder='例：洗濯できた'
        className={styles.input}
      />
      <button 
        type='submit'
        aria-describedby='status-message'
        className={styles.button}
      >記録する</button>
    </form>
  );
};

export default InputForm;