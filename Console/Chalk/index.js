import chalk from 'chalk';

const nota = 5;

console.clear();
if (nota >= 7) {
    console.log(chalk.green("Parabéns! Você foi aprovado!"));
} else {
    console.log(chalk.bgRed.black("Você precisa fazer a prova de recuperação!"));
}