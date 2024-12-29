import React, { useState, useEffect } from 'react';

const GregOSBootScreen = (props) => {
  const [messages, setMessages] = useState([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Define an array of boot messages (including potential errors)
  const bootSequence = [
    'Initializing GregOS v1.0.0...',
    'Loading kernel modules...',
    'Memory check: 4096MB OK',
    'ERROR: QuantumMind interface not detected.',
    'Attempting to establish connection...',
    'WARNING: System instability detected.',
    'Initializing core system processes...',
    'INT3RN4L_3RR0R: Failed to load emotional regulation module.',
    'WARNING: Parental Execution System (PES) is active.',
    'Searching for valid user profile...',
    'User profile "Greg" loaded.',
    'Launching user interface...',
    'Boot sequence complete.',
  ];

  useEffect(() => {
    let isMounted = true;

    const logMessage = (message) => {
      if (message.startsWith('ERROR')) {
        console.error(message);
      } else if (message.startsWith('WARNING')) {
        console.warn(message);
      } else {
        console.log(message);
      }
    };

    const runBootSequence = async () => {
      for (let i = 0; i < bootSequence.length; i++) {
        await new Promise((resolve) =>
          setTimeout(resolve, 700 + Math.random() * 700) // variable delay
        );
        if (!isMounted) return;

        // Generate an extra memory-related error around the memory check message
        if (bootSequence[i].includes('Memory check')) {
          console.error('ERROR: Memory corruption detected on sector 0x0010');
        }

        logMessage(bootSequence[i]);
        setMessages((prev) => [...prev, bootSequence[i]]);
      }
      setLoading(false);
      if (props.onBootComplete) props.onBootComplete();
    };

    runBootSequence();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="bg-black text-green-400 font-mono text-lg p-4 h-screen w-screen overflow-y-scroll">
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
      {loading && (
        <div className="animate-pulse text-center text-green-500 mt-4">
          <p>Loading GregOS...</p>
        </div>
      )}
    </div>
  );
};

export default GregOSBootScreen;