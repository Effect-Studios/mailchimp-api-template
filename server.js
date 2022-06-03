const express = require("express");
const axios = require("axios");
const cors = require("cors");

async function addToList(req, res) {
  try {
    const url = `https://${process.env.DC}.api.mailchimp.com/3.0/lists/${process.env.LIST_ID}/members`;
    await axios.post(url, req.body, {
      headers: {
        Authorization: `apiKey ${process.env.API_KEY}`
      }
    });
    res.status(201).send({
      message: "Added to list"
    });
  } catch (err) {
    const { status=500, data={message: 'Server Error'} } = err.response || {};
    res.status(status).send(data);
  }
}

// Main Server Handler
const server = express();
server.use(express.json());
server.use(
  cors({
    origin: ['live-domain-of-frontend-app'],
    credentials: true
  })
);
server.post("/register", addToList);

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Server is running at localhost:${port}`);
});
