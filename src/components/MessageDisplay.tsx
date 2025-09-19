import React from 'react';

interface MessageDisplayProps {
  message: string;
}

const MessageDisplay = ({message}:MessageDisplayProps) => {
  return (
    <>
      {message && <p style={{color: 'green'}}>{message}</p>}
    </>
  );
};

export default MessageDisplay;