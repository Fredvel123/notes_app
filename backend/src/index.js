import app from "./app.js";

const port = app.get("port");

app.get("/", (_req, res) =>
  res.json({ status: 200, message: "server is online" })
);

app.listen(port, () => {
  console.log(`server is running uon port: ${port}`);
});
