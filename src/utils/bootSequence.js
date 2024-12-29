import { MESSAGE_TYPES } from './constants';

// Boot sequence messages and configuration
export const bootMessages = [
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

export const getMessageType = (message) => {
  if (message.startsWith('ERROR')) return MESSAGE_TYPES.ERROR;
  if (message.startsWith('WARNING')) return MESSAGE_TYPES.WARNING;
  return MESSAGE_TYPES.INFO;
};