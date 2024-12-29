import { MESSAGE_TYPES } from './constants';

// Utility functions for console logging
export const logMessage = (message, type) => {
  switch (type) {
    case MESSAGE_TYPES.ERROR:
      console.error(message);
      break;
    case MESSAGE_TYPES.WARNING:
      console.warn(message);
      break;
    default:
      console.log(message);
  }
};