const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let person = {
  name: '',
  sayings: [],
};

rl.question('What is the name of the person?', (answer) => {

  person.name = answer;

  rl.setPrompt(`What would ${person.name} say?`);

  rl.prompt();

  rl.on('line', (saying) => {

    if (saying.toLowerCase().trim() === 'exit') {
      rl.close();
    } else {
      rl.setPrompt(`What else would ${person.name} say? ("exit" to leave)`);
      rl.prompt();
    }
    person.sayings.push(saying.trim());
  });

});

rl.on('close', () => {
  console.log("%s is a real person that says %j", person.name, person.sayings);
  process.exit();
});



// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   rl.question('Why ' + answer + '?', (why) => {
//     console.log(why);
//   })
//
//   rl.close();
// });
