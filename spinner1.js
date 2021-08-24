//process.stdout.write('hello from spinner1.js... \rheyyy\n');

const animates = ['|', '/', '-', '/', '-', '\\', ':)']

const animator = (array) => {
  array.forEach((element, index) => {
    setTimeout(() => {
      process.stdout.write(`\r${element} `)
    }, 300 * index);
 
  });
} 

console.log(animator(animates))


