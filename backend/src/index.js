import app from "./app.js";

const port = app.get("port");

app.get("/", (_req, res) =>
  res.json({ 
    status: 200, 
    message: "server is online",
    documetation: 'https://github.com/Fredvel123/notes_app/tree/master/backend#readme' 
  })
);

app.listen(port, () => {
  console.log(`server is running uon port: ${port}`);
});
