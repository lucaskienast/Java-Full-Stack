
// domain/.netlify/functions/hello

const items = [
    {id: 1, name: "John"},
    {id: 2, name: "Jane"},
]

exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: "Hello World!"
        //body: JSON.stringify(items)
    }
}