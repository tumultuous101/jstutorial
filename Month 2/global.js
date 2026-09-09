// The global object in Node.js is a global namespace object that provides access to various built-in modules, functions, and properties. It is similar to the window object in browsers, but it is specific to the Node.js environment.
// setTimeout and setInterval are two commonly used functions in Node.js that allow you to schedule the execution of code after a certain delay or at regular intervals, respectively.

// clearInterval is a function that can be used to stop the execution of a setInterval function before it completes its scheduled iterations.

// console.log(global);

global.setTimeout(() =>{
  console.log('shut the fuck up big dawg');
  global.clearInterval(int)
}, 7000)

const int = setInterval(() => {
  console.log('Ummm, Hello world?');
}, 1000)

// An idea popped into my head 

 const discussion = [
   {speaker: "Moses", line: "Pre nut delusion or post nut clarity?"},
   {speaker: "random guy", line: "The fuck kind of question is that?"},
   {speaker: "Moses", line: "A philosophical question"}, 
   {speaker: "random guy", line: "Who the fuck is asking philosophical questions like pre nut bust or post nut hysteria?"},
   {speaker: "Moses", line: "Cultured men ask philosophical questions like pre nut bust or post nut hysteria."},
   {speaker: "random guy", line: "Well I guess I am an uncultured man"},
   {speaker: "random guy", line: "Pre nut delsusion, is my answer, it keeps you on edge, mind as clear as daylight and the will to do anything to get that nut"},
   {speaker: "Moses", line: "I see...."}
 ];
 discussion.forEach((msg, index) => {
   setTimeout(() => {
     console.log(`${msg.speaker}: ${msg.line}`);
   }, index * 2500)
 });

// __dirname is a global variable in Node.js that represents the directory name of the current module. It provides the absolute path to the directory where the currently executing script resides. This variable is useful for constructing file paths and accessing files relative to the current module's location.

// __filename is another global variable in Node.js that represents the absolute path of the currently executing script file. It provides the full path, including the file name, of the module being executed. This variable is useful for obtaining information about the current script's location and can be used for various purposes, such as logging or debugging.

console.log(__dirname);
console.log(__filename);