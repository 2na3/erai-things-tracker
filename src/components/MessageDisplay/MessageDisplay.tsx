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

const GetAriaLive = (type: 'success' | 'error' | 'info'): 'assertive' | 'polite' => {
  switch (type) {
    case 'error':
      return 'assertive';
    case 'success':
    case 'info':
      return 'polite';
    default:
      return 'polite';
  }
};

const MessageDisplay = ({message}:MessageDisplayProps) => {
  return (
    <div className={styles.container}>
      <div
        aria-live={message ? GetAriaLive(message.type) : 'polite'}
        aria-atomic="true"
        role="status"
        className={`${styles.message} ${message ? getMessageClass(message.type) : ''}`}
        id='status-message'>
        {message?.text}
      </div>
    </div>
  );
};

export default MessageDisplay;