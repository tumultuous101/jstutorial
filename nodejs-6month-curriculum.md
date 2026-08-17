# Node.js 6-Month Learning Curriculum
### For: [Brother's Name] | Supervised by: Knomic | Goal: Build real Node.js projects by Month 6

---

## Before You Start — Read This First

This curriculum assumes you already know:
- Basic HTML (writing tags, structure, forms)
- Basic MySQL (writing SELECT, INSERT, UPDATE, DELETE queries)
- Nothing about JavaScript or Node.js (we start from scratch)

**Your commitment:** 2–3 hours of study every weekday. Weekends are optional but encouraged for catching up.

**Your supervisor's commitment:** 15–30 minutes once a week to review your GitHub and ask you 2–3 checkpoint questions.

**Your tools (install these on Day 1):**
- [Node.js](https://nodejs.org) — install the LTS version
- [VS Code](https://code.visualstudio.com) — your code editor
- [Git](https://git-scm.com) — for saving and submitting your work
- [Postman](https://www.postman.com) — for testing APIs (free)
- A GitHub account — create one at [github.com](https://github.com)

---

## The 6-Month Map (Overview)

| Month | Theme | What You'll Be Able to Do |
|---|---|---|
| 1 | Git, GitHub & JavaScript Foundations | Use Git daily, push code to GitHub, write proper JS |
| 2 | Node.js Core | Build scripts, work with files and the Node.js environment |
| 3 | Express.js & REST APIs | Build and test a working API from scratch |
| 4 | Databases with Node | Connect your API to MySQL, run real queries |
| 5 | Auth, Validation & Best Practices | Add login/signup, secure your app, write clean code |
| 6 | Capstone Project | Build and deploy a complete Node.js project |

---

## How Progress Monitoring Works

**Your job (daily):**
- Write code every single day, even if it's just 10 lines
- Commit your code to GitHub at the end of each day (`git add . && git commit -m "day X: what I did"`)
- Tick off the weekly checklist (provided at the start of each month)

**Your supervisor's job (weekly, ~20 mins):**
- Glance at your GitHub commits — did you push code this week?
- Ask you 2–3 checkpoint questions from the list at the end of each phase
- Review your weekly mini-project

**Monthly milestone:** You submit one small project at the end of each month. Your supervisor reviews it and signs off before you move to the next month.

---

---

# MONTH 1 — JavaScript Foundations

> Node.js runs JavaScript. If you skip this month and jump straight to Node, you will struggle badly. Do not rush this phase.

## Month 1 Goal
By the end of Month 1, you should be able to use Git and GitHub to track and submit your work, write JavaScript programs that use variables, functions, arrays, objects, and handle asynchronous tasks using Promises and async/await.

---

## Week 1 — Git & GitHub Basics

> You are going to write a lot of code over the next 6 months. Git is how you save it, track it, and show it to your supervisor. Learn this first — everything else depends on it.

**What is Git?**
Git is a version control tool. Think of it like a very powerful "Save" button that also keeps a full history of every previous version of your project. If you break something, you can go back. If your supervisor wants to check your work, they can see exactly what you wrote and when.

**What is GitHub?**
GitHub is a website where you store your Git projects online. It's like Google Drive for code. Your supervisor will be checking your GitHub regularly to monitor your progress — so committing and pushing to GitHub is not optional.

**Topics to cover:**
- Installing and configuring Git:
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "you@example.com"
  ```
- Initializing a local repo: `git init`
- The three stages of Git:
  - **Working directory** — files you're editing right now
  - **Staging area** — files you've prepared to save (`git add`)
  - **Repository** — files you've permanently saved (`git commit`)
- Core daily commands:
  ```bash
  git status            # see what's changed
  git add .             # stage all changes
  git add filename.js   # stage one specific file
  git commit -m "message describing what you did"
  git log               # see commit history
  git log --oneline     # compact history view
  ```
- Writing good commit messages — be specific:
  - Bad: `"stuff"`, `"changes"`, `"fix"`
  - Good: `"day 3: add even/odd checker function"`, `"week 1: complete temperature converter"`
- Connecting to GitHub:
  ```bash
  git remote add origin https://github.com/yourusername/repo-name.git
  git branch -M main
  git push -u origin main   # first push
  git push                  # all future pushes
  ```
- Cloning an existing repo: `git clone <url>`
- The `.gitignore` file — listing files Git should never track:
  ```
  node_modules/
  .env
  *.log
  ```
- Basic branching (understand the concept now, use it actively from Month 5):
  ```bash
  git checkout -b feature/my-new-feature   # create and switch to a new branch
  git checkout main                         # go back to main
  git merge feature/my-new-feature          # merge branch into main
  ```

**Free Resources:**
- [Git Official Docs — Getting Started](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) — read Chapters 1 & 2
- [GitHub Docs — Hello World](https://docs.github.com/en/get-started/quickstart/hello-world) — official beginner guide
- [Traversy Media — Git & GitHub Crash Course (YouTube)](https://www.youtube.com/watch?v=SWYqp7iY_Tc) — watch this first, it's 30 minutes and covers everything
- [freeCodeCamp — Git & GitHub for Beginners (YouTube)](https://www.youtube.com/watch?v=RGOj5yH7evk)

**Daily Practice Tasks:**
- Day 1: Install Git, configure your name and email, verify with `git config --list`. Create a GitHub account if you don't have one.
- Day 2: Create a folder called `month1-practice`, run `git init` inside it, create a `hello.js` file that prints your name, do your first `git add` and `git commit`
- Day 3: Create a new repo on GitHub called `nodejs-training`, connect your local folder to it, and push your code with `git push` — verify it appears on GitHub
- Day 4: Make 3 changes to your `hello.js` file one at a time — stage and commit each change separately with a descriptive message. Then run `git log --oneline` and take a screenshot to show your supervisor
- Day 5: Create a `.gitignore` file, add `node_modules/` and `.env` to it. Create a fake `secret.env` file and verify that `git status` does NOT show it as a change to commit

**Week 1 Checkpoint Questions (for supervisor):**
1. What is the difference between `git add` and `git commit`?
2. What does `git status` show you?
3. Show me your GitHub repo — can I see your commit history with meaningful messages?

---

## Week 2 — JavaScript Basics

> Now that Git is set up, every single daily task this week gets committed to GitHub at the end of the day. No exceptions.

**Topics to cover:**
- What JavaScript is and how it's different from HTML
- Variables: `var`, `let`, `const` — and when to use each
- Data types: strings, numbers, booleans, null, undefined
- Operators: arithmetic (`+`, `-`, `*`, `/`, `%`), comparison (`===`, `!==`, `>`, `<`), logical (`&&`, `||`, `!`)
- Conditionals: `if`, `else if`, `else`, ternary operator (`condition ? yes : no`)
- Loops: `for`, `while`, `for...of`
- `console.log()` — your best friend for debugging

**Free Resources:**
- [JavaScript.info — The Basics](https://javascript.info/first-steps) — read Chapters 1–8
- [freeCodeCamp JavaScript Algorithms — Basic JavaScript](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) — do the first 30 exercises

**Daily Practice Tasks:**
- Day 1: Write a script that prints your name, age, and course to the console
- Day 2: Write a script that checks if a number is even or odd
- Day 3: Write a loop that prints numbers 1 to 50, but skips multiples of 3
- Day 4: Write a script that asks for a temperature in Celsius and converts it to Fahrenheit
- Day 5: Mini-review — rewrite all 4 tasks above cleanly in one file

**Week 2 Checkpoint Questions (for supervisor):**
1. What is the difference between `let` and `const`?
2. What does `===` do that `==` does not?
3. Show me a loop you wrote this week. Also — did you push your commits to GitHub?

---

## Week 3 — Functions, Arrays, and Objects

**Topics to cover:**
- Functions: declaring them, calling them, return values, parameters
- Arrow functions: `const greet = (name) => { return "Hello " + name; }`
- Arrays: creating them, indexing, `.push()`, `.pop()`, `.length`
- Array methods: `.map()`, `.filter()`, `.find()`, `.forEach()`, `.includes()`
- Objects: creating them with `{}`, accessing properties with `.` and `[]`
- Nested objects and arrays

**Free Resources:**
- [JavaScript.info — Functions](https://javascript.info/function-basics)
- [JavaScript.info — Arrays](https://javascript.info/array)
- [JavaScript.info — Objects](https://javascript.info/object)
- [freeCodeCamp — Basic Data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-data-structures) — do all exercises

**Daily Practice Tasks:**
- Day 1: Write a function that takes two numbers and returns the larger one
- Day 2: Create an array of 5 product names and use `.map()` to return them all in uppercase
- Day 3: Create an array of numbers and use `.filter()` to return only numbers greater than 10
- Day 4: Create an object representing a student (name, age, course, GPA) and write a function that prints a summary sentence about them
- Day 5: Create an array of student objects, then write a function that finds and returns the student with the highest GPA

**Week 3 Checkpoint Questions:**
1. What does `.map()` do? How is it different from `.forEach()`?
2. How do you add a new item to an array?
3. Show me the student object task — walk me through your code.

---

## Week 4 — Modern JavaScript (ES6+)

> This is the JavaScript style you'll see in all modern Node.js codebases. Learn it properly.

**Topics to cover:**
- Template literals: `` `Hello, ${name}!` `` — no more string concatenation
- Destructuring: pulling values out of objects and arrays neatly
  ```js
  const { name, age } = student;
  const [first, second] = myArray;
  ```
- Spread operator (`...`): copying or combining arrays/objects
- Rest parameters (`...args`): accepting unlimited arguments in a function
- Default parameters: `function greet(name = "stranger") {}`
- Short-circuit evaluation and optional chaining (`?.`)
- Modules (basic): `import` / `export` (you'll use these in Node)

**Free Resources:**
- [JavaScript.info — Destructuring](https://javascript.info/destructuring-assignment)
- [JavaScript.info — Rest and Spread](https://javascript.info/rest-parameters-spread)
- [Net Ninja — Modern JavaScript Tutorial (YouTube)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrqAi) — episodes 1–10

**Daily Practice Tasks:**
- Day 1: Rewrite your Week 2 student object code using destructuring and template literals
- Day 2: Write a function that accepts any number of prices and returns the total using rest parameters
- Day 3: Use spread to merge two objects: `{ name: "Tunde" }` and `{ age: 20, course: "CS" }`
- Day 4: Write a function with default parameters that builds a user profile
- Day 5: Refactor your best Week 1–2 code to use all the ES6 features you've learned

**Week 4 Checkpoint Questions:**
1. Show me how destructuring works with an object you wrote.
2. What's the difference between rest and spread?
3. What is a template literal and why is it better than string concatenation?

---

## Week 5 — Asynchronous JavaScript

> This is the most important week of Month 1. Node.js is built around async programming. If you don't understand this, you won't understand Node.

**Topics to cover:**
- What "synchronous" vs "asynchronous" means (the restaurant analogy: sync = one table at a time, async = take all orders, bring food as it's ready)
- Callbacks — the old way of handling async (and why they become messy: "callback hell")
- Promises — the cleaner way:
  ```js
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  ```
- `async` / `await` — the modern, readable way:
  ```js
  async function getData() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  ```
- `try/catch` for error handling in async code
- `Promise.all()` — running multiple async tasks at the same time

**Free Resources:**
- [JavaScript.info — Callbacks](https://javascript.info/callbacks)
- [JavaScript.info — Promises](https://javascript.info/promise-basics)
- [JavaScript.info — Async/Await](https://javascript.info/async-await)
- [Fireship — Async JS in 15 mins (YouTube)](https://www.youtube.com/watch?v=vn3tm0quoqE)

**Daily Practice Tasks:**
- Day 1: Write a function that returns a Promise that resolves with "done!" after 2 seconds (use `setTimeout`)
- Day 2: Chain two Promises — first one waits 1 second and resolves with a name, second one uses that name and logs a greeting
- Day 3: Rewrite your Day 1 and Day 2 code using `async/await`
- Day 4: Write an async function that uses `Promise.all()` to "fetch" three things at the same time (simulate with `setTimeout`)
- Day 5: Break something on purpose — write code that throws an error inside an async function and catch it properly

**Week 5 Checkpoint Questions:**
1. What is the difference between a callback and a Promise?
2. What does `await` do? Why do you need `async` before a function that uses `await`?
3. What happens if you don't use `try/catch` in an async function that fails?

---

## Month 1 Milestone Project

**Project: Student Report Generator (pure JavaScript, no Node yet)**

Build a JavaScript program that:
1. Has an array of at least 5 student objects (name, age, course, scores array)
2. Has a function that calculates the average score for each student
3. Has a function that returns the top 3 students by average score
4. Has a function that generates a text "report" for each student using template literals
5. Uses a fake async function (setTimeout-based Promise) to "save" the report — simulating what saving to a file or database would look like
6. Uses `async/await` and proper `try/catch`

Submit via GitHub. Supervisor reviews and gives go-ahead for Month 2.

---
---

# MONTH 2 — Node.js Core

> Now we enter Node.js. The JavaScript you learned in Month 1 is exactly what Node uses — just without a browser.

## Month 2 Goal
By the end of Month 2, you should understand how Node.js works, be able to write Node scripts, work with the file system, create a basic HTTP server from scratch, and manage packages with npm.

---

## Week 6 — What Is Node.js & How It Works

**Topics to cover:**
- What Node.js is: JavaScript that runs on a server, not a browser
- How Node is different from browser JavaScript (no `document`, no `window`, but you get `process`, `__dirname`, `__filename`)
- The Node.js event loop — how Node handles many requests without blocking (just understand the concept, not the deep internals)
- Running your first Node script: create `app.js`, write `console.log("Hello, Node!")`, run with `node app.js`
- The Node REPL (type `node` in terminal and experiment)
- `process` object: `process.argv`, `process.env`, `process.exit()`
- CommonJS modules: `require()` and `module.exports` — how Node files share code

**Free Resources:**
- [Node.js Official Docs — Getting Started](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [Net Ninja — Node.js Crash Course (YouTube)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jszmQoULf58kFTemG6M9GE) — episodes 1–4
- [Fireship — Node.js in 100 seconds (YouTube)](https://www.youtube.com/watch?v=ENrzD9HAZK4)

**Daily Practice Tasks:**
- Day 1: Install Node, run `node --version` in your terminal, run your first `app.js`
- Day 2: Write a script that accepts a name from the command line (`process.argv[2]`) and prints a greeting
- Day 3: Create two files — `math.js` (exports add and multiply functions) and `app.js` (imports and uses them)
- Day 4: Read `process.env` — set an environment variable in your terminal and read it in your script
- Day 5: Explore the Node REPL for 1 hour — test things you learned in Month 1

**Week 6 Checkpoint Questions:**
1. What is `module.exports` and why do you need it?
2. How is `require()` different from `import`?
3. What does `process.argv` give you?

---

## Week 7 — npm and Package Management

**Topics to cover:**
- What npm is (Node Package Manager) — a giant library of free code you can use
- `npm init` — creating a `package.json` file (the ID card of your project)
- `npm install <package>` — adding a dependency
- `npm install --save-dev <package>` — adding a development-only dependency
- `node_modules` — what it is and why you NEVER commit it to GitHub (add `.gitignore`)
- `package-lock.json` — what it does (don't edit it manually)
- Common packages to know:
  - `nodemon` — auto-restarts your server when files change (dev tool)
  - `dotenv` — loads environment variables from a `.env` file
  - `chalk` — colors in your terminal output (fun, but good for learning npm)
- npm scripts: adding `"start": "node app.js"` to `package.json` and running `npm start`
- Semantic versioning: what `^1.2.3` means in your `package.json`

**Free Resources:**
- [npm Docs — Getting Started](https://docs.npmjs.com/getting-started)
- [Traversy Media — NPM Crash Course (YouTube)](https://www.youtube.com/watch?v=jHDhaSSKmB0)

**Daily Practice Tasks:**
- Day 1: Create a new project folder, run `npm init`, explore the `package.json` created
- Day 2: Install `chalk`, use it to print colorful messages to the terminal
- Day 3: Install `dotenv`, create a `.env` file with your name and a fake API key, read them in your script
- Day 4: Install `nodemon` as a dev dependency, set up an npm start script that uses it
- Day 5: Create a `.gitignore` file, push your project to GitHub WITHOUT `node_modules` — verify it's not there

**Week 7 Checkpoint Questions:**
1. What's the difference between `dependencies` and `devDependencies`?
2. Why should `node_modules` never be committed to GitHub?
3. What does `dotenv` do and why is it important?

---

## Week 8 — Built-in Node.js Modules

**Topics to cover:**
- `fs` (File System) module — reading and writing files:
  ```js
  const fs = require('fs');
  // Read a file
  fs.readFile('data.txt', 'utf8', (err, data) => { ... });
  // Write a file
  fs.writeFile('output.txt', 'Hello!', (err) => { ... });
  ```
- Promises version of fs: `require('fs').promises` or `require('fs/promises')` — use `async/await`
- `path` module — handling file paths safely across operating systems (`path.join()`, `path.resolve()`, `path.extname()`, `path.basename()`)
- `os` module — reading system info (`os.platform()`, `os.homedir()`, `os.cpus()`)
- `events` module — the EventEmitter (the backbone of Node.js):
  ```js
  const EventEmitter = require('events');
  const emitter = new EventEmitter();
  emitter.on('order', (item) => console.log(`Order received: ${item}`));
  emitter.emit('order', 'Jollof rice');
  ```

**Free Resources:**
- [Node.js Docs — fs module](https://nodejs.org/api/fs.html)
- [Net Ninja — Node.js Crash Course (YouTube)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jszmQoULf58kFTemG6M9GE) — episodes 5–8

**Daily Practice Tasks:**
- Day 1: Write a script that reads a `.txt` file and prints its contents (create the file yourself)
- Day 2: Write a script that takes user input from command line and appends it to a log file with a timestamp
- Day 3: Build a "file info" tool — accepts a file path and prints its name, extension, and size
- Day 4: Build a simple event system — create a "shop" EventEmitter that emits `newOrder`, `orderReady`, and `orderDelivered` events and has listeners for each
- Day 5: Combine fs + path + events — write a script that watches a folder, and when a file is added, reads it and logs the content (research `fs.watch()`)

**Week 8 Checkpoint Questions:**
1. What's the difference between `fs.readFile()` and `fs.readFileSync()`? Which should you prefer and why?
2. Why do you use `path.join()` instead of just concatenating folder names with `/`?
3. Explain what an EventEmitter does in your own words.

---

## Week 9 — HTTP Module & Basic Server

**Topics to cover:**
- What a server is — a computer that listens for requests and sends back responses
- HTTP basics: requests (GET, POST, PUT, DELETE), responses (status codes — 200, 404, 500), headers
- Building a basic HTTP server with Node's built-in `http` module:
  ```js
  const http = require('http');
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  });
  server.listen(3000, () => console.log('Server running on port 3000'));
  ```
- Handling different routes manually: checking `req.url` and `req.method`
- Sending JSON responses: `JSON.stringify()`, setting `Content-Type: application/json`
- Streams in Node.js — the concept (data comes in chunks, not all at once)
- Why the raw `http` module is painful and why frameworks like Express exist

**Free Resources:**
- [Net Ninja — Node.js Crash Course (YouTube)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jszmQoULf58kFTemG6M9GE) — episodes 9–12
- [Node.js Docs — HTTP module](https://nodejs.org/api/http.html)

**Daily Practice Tasks:**
- Day 1: Build a server that returns "Hello World" when you visit `localhost:3000`
- Day 2: Add routing — `/` returns a welcome message, `/about` returns info about you, anything else returns a 404
- Day 3: Make your server return JSON instead of plain text — return `{ "message": "success", "data": [...] }`
- Day 4: Add a POST route that reads the request body and echoes it back
- Day 5: Add basic request logging — every time a request comes in, log the method, URL, and timestamp to a file using `fs`

**Week 9 Checkpoint Questions:**
1. What does `res.writeHead()` do?
2. What is the difference between a GET and a POST request?
3. What does HTTP status code 404 mean? What about 500?

---

## Month 2 Milestone Project

**Project: File-Based Note-Taking CLI App**

Build a command-line note app that:
1. Accepts commands: `node notes.js add "My note here"`, `node notes.js list`, `node notes.js delete 2`
2. Saves notes to a JSON file (`notes.json`) using the `fs` module
3. Shows all notes with an ID and creation timestamp
4. Uses `path` module for safe file paths
5. Uses `dotenv` to configure the filename (so you could change it via `.env`)
6. Has proper error handling — what if the file doesn't exist yet? What if the note ID doesn't exist?

Submit via GitHub. Supervisor reviews before Month 3.

---
---

# MONTH 3 — Express.js & REST APIs

> This is where things get exciting. You'll build real APIs that can power mobile apps, web apps — anything.

## Month 3 Goal
By the end of Month 3, you should be able to build a complete, properly structured REST API with Express, test it with Postman, and handle errors gracefully.

---

## Week 10 — Express Basics & Routing

**Topics to cover:**
- What Express is and why you use it instead of raw `http` (Express = `http` module + shortcuts + tools)
- Installing Express: `npm install express`
- Creating your first Express app:
  ```js
  const express = require('express');
  const app = express();
  app.use(express.json()); // parse JSON request bodies
  
  app.get('/', (req, res) => {
    res.json({ message: 'Welcome!' });
  });
  
  app.listen(3000, () => console.log('Server running'));
  ```
- Route methods: `app.get()`, `app.post()`, `app.put()`, `app.patch()`, `app.delete()`
- Route parameters: `/users/:id` — access with `req.params.id`
- Query strings: `/products?category=food&limit=10` — access with `req.query`
- Request body: `req.body` (why you need `express.json()` middleware)
- Express Router — splitting routes into separate files

**Free Resources:**
- [Express.js Official Docs — Getting Started](https://expressjs.com/en/starter/installing.html)
- [Traversy Media — Express Crash Course (YouTube)](https://www.youtube.com/watch?v=L72fhGm1tfE)
- [Net Ninja — Express Tutorial (YouTube)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9ibZ2TSBaGGNrgh4ZgYE6Cc)

**Daily Practice Tasks:**
- Day 1: Create a new Express project — build routes for `/`, `/about`, `/contact` each returning different JSON
- Day 2: Build a `/users/:id` route that returns different fake user data based on the ID in the URL
- Day 3: Build a `/products` route that accepts a `?category=` query parameter and returns a filtered list
- Day 4: Build a POST route `/users` that accepts a JSON body with `name` and `email` and echoes it back
- Day 5: Split your routes into separate files using `express.Router()` — `routes/users.js`, `routes/products.js`

**Week 10 Checkpoint Questions:**
1. What does `app.use(express.json())` do and what breaks if you remove it?
2. What is the difference between `req.params` and `req.query`?
3. How does `express.Router()` work? Show me the file structure you created.

---

## Week 11 — Middleware

**Topics to cover:**
- What middleware is — a function that runs BETWEEN the request coming in and the response going out
  ```js
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // MUST call next() or the request hangs!
  });
  ```
- Built-in middleware: `express.json()`, `express.urlencoded()`, `express.static()`
- Third-party middleware: `morgan` (request logging), `cors` (Cross-Origin Resource Sharing)
- Route-specific middleware — middleware that only runs on certain routes
- Middleware execution order — the order you write `app.use()` matters
- What `next()` does — and `next(error)` for passing errors

**Free Resources:**
- [Express Docs — Using Middleware](https://expressjs.com/en/guide/using-middleware.html)
- [Traversy Media — Express Middleware (YouTube)](https://www.youtube.com/watch?v=lY6icfhap2o)

**Daily Practice Tasks:**
- Day 1: Write a custom logging middleware that logs `[timestamp] METHOD /path` for every request
- Day 2: Write an auth middleware that checks for a header `x-api-key: secret123` and returns 401 if it's wrong
- Day 3: Install `morgan` and `cors`, add them to your project
- Day 4: Apply your auth middleware only to certain routes (not all of them) — understand route-specific middleware
- Day 5: Write a "timing" middleware that measures how long each request takes to process

**Week 11 Checkpoint Questions:**
1. What happens if you forget to call `next()` in a middleware?
2. Why does order matter when using `app.use()`?
3. What is CORS and why would you need it?

---

## Week 12 — REST API Design & CRUD

**Topics to cover:**
- What REST means: Representational State Transfer — a set of rules for building APIs
- REST conventions:
  - `GET /products` — list all products
  - `GET /products/:id` — get one product
  - `POST /products` — create a new product
  - `PUT /products/:id` — replace a product entirely
  - `PATCH /products/:id` — update part of a product
  - `DELETE /products/:id` — delete a product
- Proper HTTP status codes:
  - `200 OK`, `201 Created`, `204 No Content`
  - `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`
  - `500 Internal Server Error`
- In-memory data (using a JS array as fake database — no real DB yet)
- Using Postman to test your API — creating collections, saving requests
- `res.status(201).json({ ... })` — chaining status and JSON

**Free Resources:**
- [RESTful API Design — Best Practices (freeCodeCamp article)](https://www.freecodecamp.org/news/rest-api-best-practices-rest-endpoint-design-examples/)
- [Postman Learning Center — Sending Requests](https://learning.postman.com/docs/sending-requests/requests/)

**Daily Practice Tasks:**
- Day 1: Build a full CRUD API for "products" using an in-memory array — all 5 routes
- Day 2: Set up Postman — create a collection and test every route from Day 1
- Day 3: Add proper status codes to all your responses — 201 for creation, 404 when not found, etc.
- Day 4: Build a second resource "categories" and link them — a product should have a `categoryId`
- Day 5: Write a route `GET /categories/:id/products` that returns all products in a category

**Week 12 Checkpoint Questions:**
1. What HTTP method and path would you use to update a single user's email?
2. What status code should a successful POST request return? Why not 200?
3. Show me your Postman collection — walk me through testing one route.

---

## Week 13 — Error Handling & Project Structure

**Topics to cover:**
- Why error handling matters — unhandled errors crash your server
- Express error-handling middleware — special middleware with 4 params:
  ```js
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).json({
      success: false,
      message: err.message || 'Something went wrong'
    });
  });
  ```
- Creating a custom `AppError` class with statusCode and message
- Wrapping async route handlers to catch errors automatically
- Project folder structure best practices:
  ```
  project/
  ├── src/
  │   ├── routes/
  │   ├── controllers/
  │   ├── middleware/
  │   └── utils/
  ├── .env
  ├── .gitignore
  ├── package.json
  └── app.js
  ```
- Separating concerns: route files should only handle routing, controller files contain logic
- `app.js` vs `server.js` — separating the Express app from the server startup

**Free Resources:**
- [Express Docs — Error Handling](https://expressjs.com/en/guide/error-handling.html)
- [Traversy Media — REST API MVC Structure (YouTube)](https://www.youtube.com/watch?v=_7UQPve99r4)

**Daily Practice Tasks:**
- Day 1: Add a global error handling middleware to your existing project
- Day 2: Create an `AppError` class and use it to throw errors in your routes (`throw new AppError('Not found', 404)`)
- Day 3: Restructure your project — create `routes/`, `controllers/`, `middleware/` folders
- Day 4: Move all logic out of routes into controllers — routes should only call controller functions
- Day 5: Handle the case where an invalid ID format crashes your app — add guards and proper error responses

**Week 13 Checkpoint Questions:**
1. What makes error-handling middleware different from regular middleware in Express?
2. Why do we separate routes from controllers?
3. What happens to an error thrown inside an async route handler if you don't handle it?

---

## Month 3 Milestone Project

**Project: Products & Categories REST API**

Build a fully structured REST API that:
1. Has two resources: `Products` and `Categories`
2. Has all CRUD routes for both resources
3. Uses data stored in memory (plain JS arrays — no DB yet, that's Month 4)
4. Is structured in proper MVC folders (routes, controllers, middleware)
5. Has a global error handler that returns consistent `{ success, message, data }` shaped responses
6. Includes a custom logging middleware
7. Is fully tested in Postman (export your Postman collection and commit it to GitHub)

Submit via GitHub with a README explaining your routes. Supervisor reviews before Month 4.

---
---

# MONTH 4 — Database Integration with Node.js

> You already know MySQL. Now you'll connect it to your Node.js APIs.

## Month 4 Goal
By the end of Month 4, you should be able to connect a Node.js API to a MySQL database, run all types of queries, use Knex.js for clean query building, and manage database migrations.

---

## Week 14 — MySQL with Node.js (mysql2)

**Topics to cover:**
- Installing `mysql2`: `npm install mysql2`
- Creating a database connection:
  ```js
  const mysql = require('mysql2/promise');
  const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });
  ```
- Why use a **connection pool** instead of a single connection
- Running queries: `const [rows] = await pool.query('SELECT * FROM products')`
- Parameterized queries (VERY IMPORTANT — prevents SQL injection):
  ```js
  const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [id]);
  ```
- Inserting data and getting the inserted ID: `result.insertId`
- Storing your DB credentials in `.env` — NEVER hardcode them

**Free Resources:**
- [mysql2 npm page](https://www.npmjs.com/package/mysql2) — read the README
- [Traversy Media — MySQL with Node (YouTube)](https://www.youtube.com/watch?v=EN6Dx22cZYE)

**Daily Practice Tasks:**
- Day 1: Install MySQL locally (or use a free cloud DB like PlanetScale/Aiven), create a `shop` database with a `products` table
- Day 2: Connect your Month 3 API to MySQL — replace your in-memory array with real DB queries for GET all products
- Day 3: Add DB queries for GET by ID, POST (insert), PUT (update)
- Day 4: Add DELETE — also handle the case where the ID doesn't exist in the DB
- Day 5: Store all credentials in `.env` — test that your app crashes gracefully if DB connection fails

**Week 14 Checkpoint Questions:**
1. Why do you use `?` placeholders in queries instead of string interpolation?
2. What is a connection pool and why is it better than a single connection?
3. What is `result.insertId` and when would you use it?

---

## Week 15 — Knex.js: Query Builder & Migrations

**Topics to cover:**
- Why use Knex.js — cleaner query building, protection from SQL injection, migrations, multi-DB support
- Installing Knex: `npm install knex` and `npm install mysql2`
- Setting up `knex.js` config file
- Basic Knex queries:
  ```js
  // SELECT
  const products = await knex('products').select('*');
  // WHERE
  const product = await knex('products').where({ id }).first();
  // INSERT
  const [id] = await knex('products').insert({ name, price });
  // UPDATE
  await knex('products').where({ id }).update({ price });
  // DELETE
  await knex('products').where({ id }).delete();
  ```
- Knex migrations — creating and versioning your database schema with code:
  ```bash
  npx knex migrate:make create_products_table
  npx knex migrate:latest
  npx knex migrate:rollback
  ```
- Knex seeds — populating your DB with test data:
  ```bash
  npx knex seed:make 01_products
  npx knex seed:run
  ```

**Free Resources:**
- [Knex.js Official Docs](http://knexjs.org)
- [Learn Knex.js (YouTube - Jack Herrington)](https://www.youtube.com/watch?v=2RalXOvFhGA)

**Daily Practice Tasks:**
- Day 1: Install Knex, set up config, refactor your `pool.query()` calls to use Knex syntax
- Day 2: Create a migration for your `products` table — run it, then roll it back, then run it again
- Day 3: Create a migration for a `categories` table with a foreign key to link with products
- Day 4: Create seed files for both tables with 5–10 sample records each
- Day 5: Write a Knex query that joins `products` and `categories` — `GET /products` should return the category name too

**Week 15 Checkpoint Questions:**
1. What does `knex migrate:rollback` do?
2. What is a seed file and when would you use it?
3. Show me a Knex query that does a JOIN between two tables.

---

## Week 16 — Building a Full CRUD API with DB

**Topics to cover:**
- Connecting everything: Express routes → Controllers → Knex queries → MySQL database
- Handling DB errors gracefully — what to do when a query fails
- Transactions — when you need multiple queries to all succeed or all fail:
  ```js
  await knex.transaction(async (trx) => {
    const [categoryId] = await trx('categories').insert({ name });
    await trx('products').insert({ name: 'Product', categoryId });
  });
  ```
- Pagination — `GET /products?page=1&limit=10`
  ```js
  const products = await knex('products')
    .limit(limit)
    .offset((page - 1) * limit);
  ```
- Sorting and filtering from query params

**Daily Practice Tasks:**
- Day 1: Build a completely DB-backed CRUD API for `products` — all routes working, properly tested in Postman
- Day 2: Add the categories resource — full CRUD
- Day 3: Add pagination to your `GET /products` route — test with Postman
- Day 4: Add sorting: `GET /products?sort=price&order=asc`
- Day 5: Add a transaction — when you delete a category, also delete all its products in the same transaction

**Week 16 Checkpoint Questions:**
1. Why would you use a transaction?
2. How does pagination work? Walk me through the math of `offset`.
3. What happens to your API if the database goes down? What does the user see?

---

## Week 17 — Environment Config & Database Best Practices

**Topics to cover:**
- Proper `.env` structure for development vs production
- Never expose your `.env` file — always add it to `.gitignore`
- Create a `.env.example` file to show teammates what variables are needed (without the real values)
- Database connection error handling on app startup
- Input sanitization — cleaning data before inserting into DB
- Understanding indexes — why you add indexes on columns you filter by (especially `foreign key` columns)
- Soft deletes — instead of actually deleting records, set a `deleted_at` timestamp (optional but good practice)

**Daily Practice Tasks:**
- Day 1: Create a proper `.env` file with all your config, a `.env.example` with placeholder values, and verify `.gitignore` excludes `.env`
- Day 2: Add startup DB connection check — if DB is unreachable on startup, log a clear error message and stop the process
- Day 3: Add a `created_at` and `updated_at` column to your tables using Knex's `.timestamps()` helper
- Day 4: Implement soft deletes on your products table — `DELETE /products/:id` should set `deleted_at`, not actually delete
- Day 5: Full end-to-end test of your API using Postman — create, read, update, soft-delete, verify everything works

**Week 17 Checkpoint Questions:**
1. What should you put in `.env.example` vs `.env`?
2. What is a soft delete and when is it useful?
3. Why do foreign key columns need indexes?

---

## Month 4 Milestone Project

**Project: Inventory Management REST API (with real database)**

Upgrade your Month 3 project to use a real MySQL database:
1. Proper migrations for all tables (products, categories)
2. Seed data for testing
3. All CRUD routes working with real DB queries via Knex
4. Pagination and sorting on list routes
5. Soft deletes on products
6. Joined queries (product list includes category name)
7. Proper `.env` configuration and `.env.example`
8. Full Postman collection committed to the repo

Submit via GitHub with a README that includes setup instructions (how to install, set up DB, run migrations, start the server). Supervisor reviews before Month 5.

---
---

# MONTH 5 — Authentication, Validation & Best Practices

> This month you'll learn how to make your APIs production-ready — secure, validated, and well-structured.

## Month 5 Goal
By the end of Month 5, you should be able to add user registration and login to any API, protect routes behind authentication, validate incoming data, and write clean, maintainable code.

---

## Week 18 — User Authentication with JWT

**Topics to cover:**
- What authentication is vs authorization (who you are vs what you're allowed to do)
- Hashing passwords with `bcrypt` — NEVER store plain text passwords:
  ```js
  const bcrypt = require('bcrypt');
  const hash = await bcrypt.hash(password, 10); // 10 = cost factor (salt rounds)
  const isMatch = await bcrypt.compare(password, hash);
  ```
- JSON Web Tokens (JWT) — a token that proves who you are:
  ```js
  const jwt = require('jsonwebtoken');
  // Create token
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });
  // Verify token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  ```
- Auth flow: Register (create user, hash password, return token) → Login (check password, return token) → Protected route (verify token in header)
- Auth middleware — verifying the token before allowing access to protected routes:
  ```js
  const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    // verify token, attach user to req.user
    next();
  };
  ```
- Installing: `npm install bcrypt jsonwebtoken`

**Free Resources:**
- [JWT.io — Introduction](https://jwt.io/introduction)
- [Traversy Media — JWT Authentication (YouTube)](https://www.youtube.com/watch?v=mbsmsi7l3r4)

**Daily Practice Tasks:**
- Day 1: Create a `users` table migration (id, name, email, password, created_at)
- Day 2: Build `POST /auth/register` — hash password, insert user, return JWT
- Day 3: Build `POST /auth/login` — find user by email, compare password, return JWT
- Day 4: Build the auth middleware — if no valid token, return 401
- Day 5: Apply the auth middleware to your products routes — only logged-in users can create/update/delete

**Week 18 Checkpoint Questions:**
1. Why do you never store a plain-text password in the database?
2. What is a JWT? What information is stored inside it?
3. Where does the client send the JWT in each request?

---

## Week 19 — Input Validation

**Topics to cover:**
- Why validation matters — never trust user input
- Validating manually vs using a library
- `express-validator` — the standard validation library for Express:
  ```js
  const { body, validationResult } = require('express-validator');
  
  router.post('/products',
    body('name').notEmpty().withMessage('Name is required'),
    body('price').isFloat({ min: 0 }).withMessage('Price must be positive'),
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      // proceed...
    }
  );
  ```
- Validation rules: `notEmpty()`, `isEmail()`, `isLength()`, `isInt()`, `isFloat()`, `isIn()`, `custom()`
- Sanitization: `trim()`, `normalizeEmail()`, `escape()`
- Creating a reusable validation middleware to keep route files clean

**Free Resources:**
- [express-validator docs](https://express-validator.github.io/docs/)

**Daily Practice Tasks:**
- Day 1: Add validation to `POST /auth/register` — name required, email must be valid format, password at least 8 characters
- Day 2: Add validation to `POST /products` — name required, price is a positive number, category ID is required
- Day 3: Add validation to `PUT /products/:id` — same rules but all fields optional (partial update)
- Day 4: Create a reusable `validate` middleware that automatically checks `validationResult` and returns errors — use it across all routes
- Day 5: Add email uniqueness validation to registration using a `custom()` validator that queries the DB

**Week 19 Checkpoint Questions:**
1. What is the difference between validation and sanitization?
2. Why do you check `validationResult(req)` in the route handler?
3. How would you validate that an email is not already taken in the database?

---

## Week 20 — Logging, Error Monitoring & Code Quality

**Topics to cover:**
- `morgan` — HTTP request logging (already used, but go deeper into formats and custom tokens)
- `winston` — structured application logging (info, warn, error levels, log to file):
  ```js
  const winston = require('winston');
  const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
      new winston.transports.Console()
    ]
  });
  ```
- Environment-based logging (verbose in dev, errors only in production)
- Code quality basics:
  - ESLint — catches errors and enforces style: `npm install eslint --save-dev`
  - Prettier — auto-formats your code: `npm install prettier --save-dev`
  - `.eslintrc.json` and `.prettierrc` config files
- Consistent response structure — always return `{ success, message, data }` shape

**Daily Practice Tasks:**
- Day 1: Add `winston` to your project — log errors to an `error.log` file, info to console
- Day 2: Replace all `console.error()` calls in your app with `logger.error()`
- Day 3: Set up ESLint — run it on your code, fix all warnings it flags
- Day 4: Set up Prettier — auto-format your entire codebase
- Day 5: Audit your API responses — make sure every single route returns the same response shape

**Week 20 Checkpoint Questions:**
1. What is the difference between `morgan` and `winston`?
2. What does ESLint check for?
3. Why is consistent response structure important in an API?

---

## Week 21 — Git, GitHub Workflow & Documentation

**Topics to cover:**
- Git branching — working on features in separate branches:
  ```bash
  git checkout -b feature/add-auth
  git add .
  git commit -m "feat: add JWT authentication"
  git checkout main
  git merge feature/add-auth
  ```
- Conventional commit messages:
  - `feat:` new feature
  - `fix:` bug fix
  - `refactor:` code restructure
  - `docs:` documentation
  - `chore:` maintenance
- Pull requests — even if working alone, practice the PR workflow on GitHub
- README best practices: project description, tech stack, setup instructions, API documentation
- Documenting your API — list every endpoint with method, path, body, and example response
- `.gitignore` — make sure you have all the right exclusions (`node_modules`, `.env`, `logs/`, `dist/`)

**Daily Practice Tasks:**
- Day 1: Create a new branch `feature/improve-structure`, refactor something in your project, merge it back via a PR on GitHub
- Day 2: Write a proper README for your Month 4 project — setup instructions, env variables needed, API endpoints table
- Day 3: Write proper commit messages for your last 10 commits (amend them if they're bad)
- Day 4: Document your entire API — create an `API.md` file listing every endpoint with examples
- Day 5: Do a full code review of your own project — fix at least 5 things you're not happy with

**Week 21 Checkpoint Questions:**
1. Why do you work on feature branches instead of directly on `main`?
2. What should a good README include?
3. Show me your commit history — are the messages descriptive and consistent?

---

## Month 5 Milestone Project

**Project: Add Auth to Your Inventory API**

Upgrade your Month 4 project:
1. Add user registration and login endpoints with JWT
2. Protect all product/category mutation routes (POST, PUT, DELETE) behind auth
3. Add input validation on all routes using `express-validator`
4. Replace `console.log` with `winston` logging
5. Set up ESLint + Prettier and clean up your code
6. Write a proper README with setup instructions and documented API endpoints

Submit via GitHub with a PR description explaining what you changed. Supervisor reviews before Month 6.

---
---

# MONTH 6 — Capstone Project

> Everything you've learned comes together now. You'll plan, build, and deploy a real Node.js project from scratch.

## Month 6 Goal
Ship a complete, working Node.js project that you built yourself. It should be something you can show to people.

---

## Week 22 — Project Planning & Setup

**What to do this week:**
- Choose your capstone project idea (see ideas below)
- Write a simple plan (no need to overthink — just list the features):
  - What does the app do?
  - What are the resources/entities? (users, posts, orders, etc.)
  - What are the API endpoints?
  - What does the database schema look like?
- Set up a fresh GitHub repo with proper structure
- Write all migrations, create seed data
- Implement auth (register/login) first — get the foundation working

**Project Ideas (pick one):**
1. **Simple Blog API** — users, posts, comments, categories, likes
2. **Task Manager API** — users, projects, tasks with status tracking, due dates, assignments
3. **Expense Tracker API** — users, expenses with categories, monthly summaries, budgets
4. **Simple Job Board API** — employers, job listings, applications from candidates
5. **Library Book API** — books, members, borrowing/returning records, overdue tracking

---

## Week 23 — Core Feature Development

**What to do this week:**
- Build all CRUD routes for your main resources
- Add relationships between resources (foreign keys, joined queries)
- Add pagination and filtering to list routes
- Test every route in Postman as you build
- Commit daily — meaningful commit messages

**Daily discipline this week:**
- Morning: Plan what you're building today (write it in a comment at the top of your file)
- During: Build one feature completely before moving to the next
- End of day: Test the feature, commit, push

---

## Week 24 — Polish, Security & Testing

**What to do this week:**
- Add proper validation to every POST and PUT route
- Add proper error handling — no route should be able to crash your server
- Verify all auth middleware is correctly applied
- Manual testing — go through every endpoint in Postman and deliberately try to break it:
  - Send invalid data — does validation catch it?
  - Try accessing protected routes without a token — do you get 401?
  - Send a non-existent ID — do you get 404?
  - Send malformed JSON — does the server crash or handle gracefully?
- Clean up your code with ESLint + Prettier
- Write your README

---

## Week 25 — Deployment & Final Submission

**What to do this week:**
- Deploy your API to a free hosting platform:
  - **Railway** ([railway.app](https://railway.app)) — easiest option, free tier, supports Node + MySQL
  - **Render** ([render.com](https://render.com)) — also free tier, easy to set up
- Set up environment variables on the hosting platform (not in code)
- Verify all routes work on the live URL
- Update your README with the live API URL
- Final code review — go through every file one more time

**Final Submission Checklist:**
- [ ] All CRUD routes working on live deployment
- [ ] Auth (register/login) working
- [ ] All protected routes require valid JWT
- [ ] Input validation on all mutation routes
- [ ] Consistent error handling
- [ ] Proper logging
- [ ] README with setup instructions and API documentation
- [ ] Clean git history with meaningful commits
- [ ] `.env.example` committed (`.env` is NOT committed)
- [ ] ESLint + Prettier set up and code is clean

---

## Month 6 Final Review (Supervisor)

**Final review session (~1 hour):**
1. Live demo — brother runs the app locally and shows it working
2. Postman walkthrough — demonstrate every endpoint live
3. Code walkthrough — explain one controller file and one middleware
4. Explain 3 decisions: "Why did you structure it this way?"
5. What would you do differently if you started again?

---
---

# SUPERVISOR'S QUICK REFERENCE

## Weekly Check-In Template (20 mins max)

**Questions to ask each week:**
1. What did you build this week? Show me in GitHub.
2. What was the hardest thing you ran into?
3. (Ask one of the checkpoint questions from the current week)

**Green flags (he's on track):**
- Daily commits visible on GitHub
- Can explain his code, not just run it
- When something broke, he can explain what caused it
- Asks questions on Slack/WhatsApp about specific problems

**Yellow flags (needs a nudge):**
- No commits for 2+ days
- Says "I'm done" but can't explain how it works
- Skipped a week's topic to move ahead

**Red flags (intervention needed):**
- No commits for a week
- Failed to complete a monthly milestone project
- Copy-pasting code he doesn't understand

---

## Monthly Milestone Sign-Off

| Month | Project | Signed Off? | Notes |
|---|---|---|---|
| 1 | Student Report Generator | ☐ | |
| 2 | File-Based Note-Taking CLI | ☐ | |
| 3 | Products & Categories REST API | ☐ | |
| 4 | Inventory Management API (with DB) | ☐ | |
| 5 | Inventory API + Auth + Validation | ☐ | |
| 6 | Capstone Project | ☐ | |

> Rule: He does not move to the next month until you sign off on the current one.

---

## Resources Master List

**JavaScript:**
- [javascript.info](https://javascript.info) — the best free JS resource, period

**Node.js:**
- [Node.js Official Docs](https://nodejs.org/en/docs)
- [Net Ninja — Node.js Crash Course (YouTube)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jszmQoULf58kFTemG6M9GE)

**Express:**
- [Express Official Docs](https://expressjs.com)
- [Traversy Media — Express Crash Course (YouTube)](https://www.youtube.com/watch?v=L72fhGm1tfE)

**General:**
- [Traversy Media YouTube Channel](https://www.youtube.com/@TraversyMedia)
- [freeCodeCamp YouTube Channel](https://www.youtube.com/@freecodecamp)
- [Fireship YouTube Channel](https://www.youtube.com/@Fireship)
- [MDN Web Docs — JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**When stuck:**
1. Re-read the error message carefully — Google the exact error text
2. Check the official docs
3. Search on Stack Overflow
4. Only then — ask your supervisor (but explain what you already tried)

---

*Built for a 300-level IT student. Supervised by a senior backend developer. Powered by 2 hours a day and real projects.*
