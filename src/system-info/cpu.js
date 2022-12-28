import os from 'os';

export const getCpu = async () => {
  const result = os
    .cpus()
    .map(cpu => ({ Model: cpu.model, Speed: cpu.speed / 1000 + 'GHz' }));
  console.table(result);
};
