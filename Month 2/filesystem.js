const fs = require('fs');
// fs = file system module, which provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions. It allows you to read, write, update, and delete files and directories, as well as perform other file system operations. The fs module can be used both synchronously and asynchronously, providing flexibility in how you handle file system tasks in your Node.js applications.


// reading files 

fs.readFile('./docs/blog1.txt', (err, data) =>{
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

//.toString() method is used to convert the data read from the file, which is typically returned as a Buffer object, into a human-readable string format. This allows you to easily manipulate and display the contents of the file in your application.

// The readFile method is an asynchronous function provided by the fs module in Node.js that allows you to read the contents of a file. It takes two arguments: the path to the file you want to read and a callback function that will be executed once the file has been read. The callback function receives two parameters: an error object (if an error occurred) and the data read from the file. If the file is read successfully, you can access its contents through the data parameter, which is typically returned as a Buffer object. You can convert this Buffer to a string using the toString() method for easier manipulation and display of the file's content.


// writing files

fs.writeFile('./docs/blog1.txt', 'Hello World', () => {
  console.log('file was written')
});

// Creates a new file for us if the file that we are calling for does not exist in a directory. 

fs.writeFile('./docs/blog2.txt', 'Hello World', () => {
  console.log('file was written')
});

// directories

// fs.mkdir() is used for making directories. 
if (!fs.existsSync('./assets')){
  fs.mkdir('./assets', (err) => {
  if (err) {
    console.log(err)
  }
  console.log('folder created')
});
} else {
  fs.rmdir('./assets', (err) => {
  if (err) {
    console.log(err)
  }
  console.log('folder deleted')
});  
}

// fs.existsSync() is a synchronous method that checks if a file or directory exists at the specified path. It returns true if the file or directory exists, and false otherwise. This method is useful for performing conditional operations based on the existence of files or directories, such as creating a new file only if it doesn't already exist, or deleting a file only if it is present. However, it's important to note that using synchronous methods can block the event loop, so they should be used judiciously in performance-sensitive applications.

// deleting files 
if (fs.existsSync('./docs/blog2.txt')) {
  fs.unlink('./docs/blog2.txt', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('file deleted')
  });
}

// fs.unlink() is an asynchronous method that deletes a file at the specified path. It takes two arguments: the path to the file you want to delete and a callback function that will be executed once the deletion is complete. The callback function receives an error object as its parameter, which will be null if the deletion was successful. If an error occurs during the deletion process, such as if the file does not exist or if there are insufficient permissions, the error object will contain details about the issue. This method allows you to remove files from the file system in a non-blocking manner, making it suitable for use in applications where performance and responsiveness are important.
