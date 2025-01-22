# Express.js Unexpected JSON Token Error

This repository demonstrates a less common error in Express.js applications: receiving an "Unexpected token" error when a non-JSON response is sent with a Content-Type header set to 'application/json'.

The `bug.js` file shows the problematic code, and the `bugSolution.js` demonstrates how to solve the issue by correctly setting the Content-Type header or sending valid JSON responses.  This is a subtle bug that can be tricky to debug, especially when dealing with responses that aren't strictly JSON.