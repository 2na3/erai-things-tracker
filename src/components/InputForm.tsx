import React, { useState } from 'react';

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
      <input 
        value={thing1} 
        onChange={(e) => setThing1(e.target.value)}
        placeholder='例：早寝できた'
        style={{
          padding: '12px 16px',
          border: '2px solid #6c757d',
          borderRadius: '8px',
          fontSize: '16px',
          width: '100%',
          maxWidth: '500px',
          margin: '0 auto',
          boxSizing: 'border-box',
          outline: 'none',
          transition: 'border-color 0.2s',
        }}
      />
      <input 
        value={thing2} 
        onChange={(e) => setThing2(e.target.value)}
        placeholder='例：ジムで運動できた'
        style={{
          padding: '12px 16px',
          border: '2px solid #6c757d',
          borderRadius: '8px',
          fontSize: '16px',
          width: '100%',
          maxWidth: '500px',
          margin: '0 auto',
          boxSizing: 'border-box',
          outline: 'none',
          transition: 'border-color 0.2s',
        }}
      />
      <input 
        value={thing3} 
        onChange={(e) => setThing3(e.target.value)}
        placeholder='例：洗濯できた'
        style={{
          padding: '12px 16px',
          border: '2px solid #6c757d',
          borderRadius: '8px',
          fontSize: '16px',
          width: '100%',
          maxWidth: '500px',
          margin: '0 auto',
          boxSizing: 'border-box',
          outline: 'none',
          transition: 'border-color 0.2s',
        }}
      />
      <button 
      onClick={onRecord}
      style={{
        padding: '12px 24px',
        backgroundColor: isHovered ? '#0056b3' : '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        cursor: 'pointer',
        fontWeight: '600',
        transition: 'background-color 0.2s',
        width: '100%',
        maxWidth: '500px',
        margin: '8px auto 0'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >記録する</button>
    </div>
  );
};

export default InputForm;