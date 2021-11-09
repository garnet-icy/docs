// const ProgressBar = require('progress')

// const bar = new ProgressBar(':bar', { total: 10 })
// const timer = setInterval(() => {
//   bar.tick()
//   if (bar.complete) {
//     clearInterval(timer)
//   }
// }, 100)


// // 模拟询问原生库
// const chalk = require('chalk')

// console.log(chalk.yellow('sad'));

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// readline.question(`你叫什么名字?`, name => {
//   console.log(`你好 ${name}!`)
//   readline.close()
// })


// 模拟询问 inquirer 库
// const inquirer = require('inquirer')

// var questions = [
//   {
//     type: 'input',
//     name: 'name',
//     message: "你叫什么名字?"
//   }
// ]

// inquirer.prompt(questions).then(answers => {
//   console.log(`你好 ${answers['name']}!`)
// })


const fs = require('fs')

// fs.open('./node_modules/.bin/cowsay','r',(err,fd) => {
//   console.log(fd);
// })

// try {
//   const fd = fs.openSync('./node_modules/.bin/cowsay', 'r')
//   console.log(fd);
// } catch (error) {
//   console.log('sad');
// }

  // fs.stat('./node_modules/.bin/cowsay',(e,stats) => {
  //   console.log(stats);
  // })


  console.log(Buffer);