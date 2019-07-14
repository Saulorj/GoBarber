import app from "./app";

app.listen(3333, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("App started at port 3333");
  }
});
