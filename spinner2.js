
const animates = ['|', '/', '-', '/', '-', '\\', ':)'];

const animator = (array) => {
  array.forEach((element, index) => {
    setTimeout(() => {
      process.stdout.write(`\r${element} `);
    }, 300 * index);
 
  });
};
console.log(animator(animates));

