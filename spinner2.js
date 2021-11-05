process.stdout.write('hello from spinner1.js... \rheyyy\n');

let timing = 100; 
let spin = ['\r| ', '\r/  ', '\r-  ', '\r\\  ', '\r||  ', '\r//  ', '\r =  ', '\r//  '];

for (const val of spin) {  
  setTimeout(() => {
    // process.stdout.write('spin');
  }, timing)
  
  timing += 100;
}
