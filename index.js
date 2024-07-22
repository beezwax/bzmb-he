const decode = require("./decode.js");
const encode = require("./encode.js");

const decodeSchema = {
  body: {
    type: "object",
    required: [
      "html"
    ],
    properties: {
      html: { type: "string" },
      options: { type: "object" }
  }}
};

const encodeSchema = {
  body: {
    type: "object",
    required: [
      "text"
    ],
    properties: {
      text: { type: "string" },
      options: { type: "object" }
  }}
};

async function bzmbHe(fastify, options) {
  fastify.post(
    "/bzmb-he-decode",
    { schema: decodeSchema },
    (req, res) => {
      try {
        const result = decode(req.body.html, req.body.options);
        res
          .code(200)
          .send(result);
      } catch (error) {
        res
          .code(500)
          .send(error);
      }
    }
  );

  fastify.post(
    "/bzmb-he-encode",
    { schema: encodeSchema },
    (req, res) => {
      try {
        const result = encode(req.body.text, req.body.options);
        res
          .code(200)
          .send(result);
      } catch (error) {
        res
          .code(500)
          .send(error);
      }
    }
  );
}

module.exports = { microbond: bzmbHe };