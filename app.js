import express from 'express';
// import { PORT } from './env.js';
import path from 'path';
import { fileURLToPath } from 'url';  // ✅ Required

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies



app.get("/",(req,res)=>{
  res.send("<h1>Welcome to home page</h1>");
  res.sendFile(path.join(import.meta.dirname,"public","index.html"));  
 });


// app.get("/contact",(req,res)=>{
//   console.log(req.query);
//   // res.send("<h1>Welcome to contact page</h1>");
//   res.send("oK");

// })  

app.post("/contact",(req,res)=>{
  console.log(req.body);
  res.send("<h1>Welcome to contact page</h1>");
res.redirect("/"); // Redirects to the home page

})  

// const response =  await fetch("https://jsonplaceholder.typicode.com/posts");
// const json = await response.json();
//  console.log(json);
// console.log



// console.log(import.meta.dirname);
// console.log(import.meta.filename);

// const staticpath = path.join(import.meta.dirname,"public");
// app.use("/public",express.static(staticpath));

// app.get("/product",(req,res)=>{
//   console.log(req.query);
//   const formattedQuery = req.query.page ? req.query.page.replace(/-/g," ") : '';
//   const formattedQuery1 = req.query.limit ? req.query.limit.replace(/-/g," ") : '';
//   res.send(`<h1>Welcome to product page ${formattedQuery} ${formattedQuery1} page</h1> `)

// })




// app.get("/profile/:username",(req,res)=>{
//   console.log(req.params);
//   // res.send("hii");
// res.send(`<h1>Welcome to ${req.params.username} profile</h1>`);

// });

// app.get("/profile/:username/article/:slug",(req,res)=>{
//   console.log(req.params);
//   const formatedslug = req.params.slug.replace(/-/g," ");
// res.send(`<h1>Welcome to ${req.params.username} article ${formatedslug}</h1>`);

// });


app.use((req,res)=>{
 return res.status(404).sendFile(path.join(import.meta.dirname,"views","404.html"));
});



const PORT = 3008;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});