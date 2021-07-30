// domain/.netlify/functions/1-hello
// ES6 export
// Always return string
// status code

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: 'our first netlify function'
  }
}

// exports.handler = (event, context, cb) => {
//   cb(null, {
//     statusCode: 200,
//     body: 'our first netlify function example 2'
//   })
// }
