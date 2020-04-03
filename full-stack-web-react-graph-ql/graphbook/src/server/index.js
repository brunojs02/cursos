import path from "path";
import cors from "cors";
import helmet from "helmet";
import express from "express";
import compress from "compression";
import services from "./services";

const app = express();
const root = path.join(__dirname, "../../");

app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "*.amazonaws.com"]
    }
  })
);
app.use(helmet.referrerPolicy({ policy: "same-origin" }));
app.use(compress());
app.use(cors());

Object.keys(services).forEach(serviceName => {
  switch (serviceName) {
    case "graphql": {
      services[serviceName].applyMiddleware({ app });
      break;
    }
    default: {
      app.use(`/${serviceName}`, services[serviceName]);
    }
  }
});

app.use("/", express.static(path.join(root, "dist/client")));
app.get("/", (_, res) => {
  res.sendFile(path.join(root, "/dist/client/index.html"));
});

app.listen(8000, () => console.log("Listening on port 8000!"));
