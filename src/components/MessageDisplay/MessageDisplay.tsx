import React, { useEffect, useRef } from 'react';
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
  const messageRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (message && messageRef.current) {
      // 現在フォーカスされている要素を記憶
      const previouslyFocused = document.activeElement as HTMLElement;
      // メッセージが表示されたら、その要素にフォーカスを移動
      messageRef.current.focus();

      // 100ms後に元の場所にフォーカスを戻す
      setTimeout(() => {
        if (previouslyFocused) {
          previouslyFocused.focus();
        }
      },100);
    }
  }, [message]);

  if (!message) return null;

  return (
    <div className={styles.container}>
      <p 
        ref={messageRef}
        tabIndex={-1}
        className={`${styles.message} ${message ? getMessageClass(message.type) : ''}`}
        id='status-message'>
        {message?.text || ''}
      </p>
    </div>
  );
};

export default MessageDisplay;