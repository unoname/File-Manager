import os from 'os';
import { logPath } from '../helpers/messages.js';

export const getCpu = () => {
  const result = os
    .cpus()
    .map(cpu => ({ Model: cpu.model, Speed: cpu.speed / 1000 + 'GHz' }));
  console.table(result);
  logPath();
};
