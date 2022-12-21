#!/usr/bin/node

const argsToConvert = parseInt(process.argv[2]);
if (isNaN(argsToConvert)) {
  console.log('Not a number');
} else {
  console.log('My number: ' + argsToConvert);
}
azii@192 0x12-javascript-warm_up % cat 6-multi_languages_loop.js
#!/usr/bin/node

const myArray = ['C is fun', 'Python is cool', 'Javascript is amazing'];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
