# Node.js Server Unresponsiveness

This repository demonstrates a common issue in Node.js servers: unresponsiveness caused by long-running synchronous operations within request handlers.  The `bug.js` file shows the problematic code.  The client will timeout due to the five-second pause.

The `bugSolution.js` file provides a solution using asynchronous operations and appropriate event handling to prevent the server from blocking.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory in your terminal.
3. Run `node bug.js`.
4. Attempt to access `http://localhost:3000` in a browser or using `curl`. You'll likely observe a timeout.
5. Run `node bugSolution.js` and test again; this will respond promptly.

## Solution

The solution involves using asynchronous methods and/or event loops to avoid blocking the main thread.  Using a framework (like Express) usually simplifies async operations.