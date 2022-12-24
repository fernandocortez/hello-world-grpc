import http from "http";
import { trpcHandler } from "./main";

// create and listen to the server handler
http
  .createServer((req, res) => {
    // act on the req/res objects

    // enable CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Request-Method", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
    res.setHeader("Access-Control-Allow-Headers", "*");

    // accepts OPTIONS
    if (req.method === "OPTIONS") {
      res.writeHead(200);
      return res.end();
    }

    // then we can pass the req/res to the tRPC handler
    trpcHandler(req, res);
  })
  .listen(5000);
