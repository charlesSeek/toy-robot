import { createInterface } from 'readline';
import Table from './models/table';
import Command from './models/command';
import { WIDTH, HEIGHT } from './consts';

const table = new Table(WIDTH, HEIGHT);
const command = new Command(table);
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', input => {
  command.run(input);
});
console.log('Please input a command:');