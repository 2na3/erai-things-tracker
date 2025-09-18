import React from 'react';

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
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <input value={thing1} onChange={(e) => setThing1(e.target.value)}/>
            <input value={thing2} onChange={(e) => setThing2(e.target.value)}/>
            <input value={thing3} onChange={(e) => setThing3(e.target.value)}/>
            <button onClick={onRecord}>記録する</button>
        </div>
    );
};

export default InputForm;