import React from 'react';
import { getMessageType } from '../../utils/bootSequence';

const BootMessage = ({ message }) => {
  const type = getMessageType(message);
  
  const getMessageColor = () => {
    switch (type) {
      case 'error':
        return 'text-red-500';
      case 'warning':
        return 'text-yellow-500';
      default:
        return 'text-green-400';
    }
  };

  return (
    <p className={`${getMessageColor()} font-mono`}>
      {message}
    </p>
  );
};

export default BootMessage;