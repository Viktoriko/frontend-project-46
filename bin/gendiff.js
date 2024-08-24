#!/usr/bin/env node
import { Command } from 'commander';
import readFile from '../src/actions/readFile.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .argument('<filepath1>', 'the path to the file being compared')
  .argument('<filepath2>', 'the path to the file being compared with')
  .option('-f, --format <type>', 'output format')
  .action(readFile)
  .parse();
