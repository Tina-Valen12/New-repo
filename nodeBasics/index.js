import chalk from 'chalk';
const log = console.log;
const text = 'Test test test';
log(chalk.blue('Hello') + ' World' + chalk.red('!'));
log(chalk.cyan(text));
log(chalk.red('Red') + chalk.yellow(' Hot') + chalk.redBright(' Chili') + chalk.greenBright(' Peppers'));
