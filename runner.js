const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImYwNmQ0Y2YxLWI1ZmQtNDkyNS1iYzQxLTRhNjJiODQyNjMxMS0xNjk1ODQyNjcxNzQyIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNmQzOWIyYTEtYTdiOS00NmE5LWIyOGEtZDdmMzJlMmFhNTk4IiwidHlwZSI6InQifQ.fE8lkEkOJbtMdNtKOvQ6I_WBsle_0DYguJ_8RkYD7Jw'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
