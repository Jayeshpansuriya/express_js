import express from 'express';
// import { PORT } from './env.js';
import path from 'path';
import { fileURLToPath } from 'url';  // ✅ Required

const app = express();
app.use(express.static('public'));




// const response =  await fetch("https://jsonplaceholder.typicode.com/posts");
// const json = await response.json();
//  console.log(json);
// console.log



console.log(import.meta.dirname);
console.log(import.meta.filename);

const staticpath = path.join(import.meta.dirname,"public");
app.use("/public",express.static(staticpath));

app.get("/product",(req,res)=>{
  console.log(req.query);
  const formattedQuery = req.query.page ? req.query.page.replace(/-/g," ") : '';
  const formattedQuery1 = req.query.limit ? req.query.limit.replace(/-/g," ") : '';
  res.send(`<h1>Welcome to product page ${formattedQuery} ${formattedQuery1} page</h1> `)

})




app.get("/profile/:username",(req,res)=>{
  console.log(req.params);
  // res.send("hii");
res.send(`<h1>Welcome to ${req.params.username} profile</h1>`);

});

app.get("/profile/:username/article/:slug",(req,res)=>{
  console.log(req.params);
  const formatedslug = req.params.slug.replace(/-/g," ");
res.send(`<h1>Welcome to ${req.params.username} article ${formatedslug}</h1>`);

});


const PORT = 3008;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});