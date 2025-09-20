import React from 'react';
import styles from './MessageDisplay.module.css'

interface Message {
  text: string;
  type: 'success' | 'error' | 'info';
}
interface MessageDisplayProps {
  message: Message | null;
}

const getMessageClass = (type: 'success' | 'error' | 'info') => {
  switch (type) {
    case 'success':
      return styles.success;
    case 'error':
      return styles.error;
    case 'info':
      return styles.info;
    default:
      console.warn('Unknown message type:', type);
      return styles.unknown;
    }
};

const MessageDisplay = ({message}:MessageDisplayProps) => {

  return (
    <div className={styles.container}>
      {message && (
        <p className={`${styles.message} ${getMessageClass(message.type)}`}>
          {message.text}
        </p>
      )}
    </div>
  );
};

export default MessageDisplay;