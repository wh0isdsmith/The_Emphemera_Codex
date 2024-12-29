import React, { useState, useEffect } from 'react';
import { bootMessages, getMessageType } from '../../utils/bootSequence';
import { logMessage } from '../../utils/logger';
import { getBootMessageDelay } from '../../utils/timing';
import BootMessage from './BootMessage';
import LoadingIndicator from './LoadingIndicator';

/**
 * GregOSBootScreen component simulates a boot sequence for the GregOS system.
 * It displays boot messages with varying delays and includes intentional error messages
 * to enhance the narrative experience.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onBootComplete - Callback function called when boot sequence completes
 */
const GregOSBootScreen = ({ onBootComplete }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const runBootSequence = async () => {
      for (let i = 0; i < bootMessages.length; i++) {
        if (!isMounted) return;
        
        await new Promise((resolve) =>
          setTimeout(resolve, getBootMessageDelay())
        );

        const message = bootMessages[i];
        const type = getMessageType(message);
        logMessage(message, type);
        setMessages((prev) => [...prev, message]);
      }
      
      setLoading(false);
      if (onBootComplete) onBootComplete();
    };

    runBootSequence();

    return () => {
      isMounted = false;
    };
  }, [onBootComplete]);

  return (
    <div className="bg-black text-green-400 font-mono text-lg p-4 h-screen w-screen overflow-y-scroll">
      {messages.map((message, index) => (
        <BootMessage key={index} message={message} />
      ))}
      {loading && <LoadingIndicator />}
    </div>
  );
};

export default GregOSBootScreen;