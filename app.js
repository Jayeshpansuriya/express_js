import express from 'express';
import {PORT} from "./public/env.js";
 
const app = express();

// console.log(__dirname);
// console.log(__filename); 
app.get("/",(req,res)=>{

    console.log(import.meta.dirname )
    console.log(import.meta.url)

    //  res.send("<h1>Hello World !!</h1>");
    res.send("Hi");

})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})


app.get("/about",(req,res)=>{
   return  res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Random Page</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 0;
      padding: 0;
      background: #f2f2f2;
      color: #333;
    }

    header {
      background-color: #4CAF50;
      color: white;
      padding: 20px;
      text-align: center;
    }

    .container {
      padding: 30px;
      max-width: 800px;
      margin: auto;
      background-color: white;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      margin-top: 40px;
      border-radius: 8px;
    }

    h1, h2 {
      color: #4CAF50;
    }

    img {
      max-width: 100%;
      border-radius: 8px;
    }

    footer {
      text-align: center;
      margin-top: 50px;
      padding: 20px;
      background-color: #eee;
      color: #777;
    }

    a {
      color: #4CAF50;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

  </style>
</head>
<body>

  <header>
    <h1>Welcome to My Random Page</h1>
    <p>This is a sample HTML layout with styling</p>
  </header>

  <div class="container">
    <h2>About Me</h2>
    <p>Hello! I'm a web developer who loves learning and experimenting with code. This is just a random page created to show how HTML and CSS can be used together to build beautiful UI.</p>

    <h2>Random Image</h2>
    <img src="https://picsum.photos/600/300" alt="Random Image from Picsum">

    <h2>Useful Links</h2>
    <ul>
      <li><a href="https://google.com" target="_blank">Google</a></li>
      <li><a href="https://github.com" target="_blank">GitHub</a></li>
      <li><a href="https://openai.com" target="_blank">OpenAI</a></li>
    </ul>
  </div>

  <footer>
    &copy; 2025 Random Page. All rights reserved.
  </footer>

</body>
</html>


    `);



 

})
// const PORT = process.env.PORT || 3000; // 🔥 Default 3000 if not set
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.get("/contactus",(req,res)=>{
    res.send("<h1>Contact Us</h1><p>Feel free to reach out!</p>");

});
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})