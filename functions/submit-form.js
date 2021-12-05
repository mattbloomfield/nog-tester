const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  try {
    const endpoint = event.body.endpoint;
    const response = await fetch(endpoint, {
      method: "POST",
      body: event.body.params,
    });
    const data = await response.json();
    return { statusCode: 200, body: JSON.stringify({ data }) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed fetching data" }),
    };
  }
};
