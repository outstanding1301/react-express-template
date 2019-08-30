module.exports = function(app) {
  app.post('/api/', (req, res)=>{
    const body = req.body;
    console.log(body);
    res.send({success: 1, comment: "post request"})
  })

  app.get("/api/", (req, res) => {
    res.send("Hello Server!");
  });
}
