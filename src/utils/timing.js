import { BOOT_MESSAGE_MIN_DELAY, BOOT_MESSAGE_RANDOM_DELAY } from './constants';

export const getBootMessageDelay = () => 
  BOOT_MESSAGE_MIN_DELAY + Math.random() * BOOT_MESSAGE_RANDOM_DELAY;