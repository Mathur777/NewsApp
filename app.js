const express=require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

const api_key = process.env.NEWS_API_KEY;



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));





app.get('/',async (req, res) =>{
try{
  //const newsAPI = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=c16c75d3b28245be888d6b8a8c192c49');
  const api_url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=${api_key}`;
  const response = await fetch(api_url);
  const json = await response.json();
  
const articles = json.articles;
res.render('home.ejs',{  articles:articles

  
});


}catch(err){
  if(err.response){
    console.log(err.response);
  }else if(err.request){
    console.log(err.request);
  }
  else{
    console.error('Error',err.message)
  }
}



});


//sports

app.get('/sports',async (req, res) =>{
  try{
    //const newsAPI = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=c16c75d3b28245be888d6b8a8c192c49');
    const API_URL =`https://newsapi.org/v2/top-headlines?country=IN&category=sports&apiKey=${api_key}`;
    const response = await fetch(API_URL);
    const json = await response.json();
    const articles = json.articles;

    res.render('sports.ejs',{  articles:articles

  
    });
    
    
    }catch(err){
      if(err.response){
        console.log(err.response);
      }else if(err.request){
        console.log(err.request);
      }
      else{
        console.error('Error',err.message)
      }
    }
    
    
    
    
  
  
  });
  
 //technology
 app.get('/tech',async (req, res) =>{
  try{
    //const newsAPI = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=c16c75d3b28245be888d6b8a8c192c49');
    const APK_URL =`https://newsapi.org/v2/top-headlines?country=IN&category=technology&apiKey=${api_key}`;
    const response = await fetch(APK_URL);
    const json = await response.json();
    const articles = json.articles;

    res.render('tech.ejs',{  articles:articles

  
    });
    
    
    }catch(err){
      if(err.response){
        console.log(err.response);
      }else if(err.request){
        console.log(err.request);
      }
      else{
        console.error('Error',err.message)
      }
    }
    
    
    
    
  
  
  });
  


//science

app.get('/science',async (req, res) =>{
  try{
    //const newsAPI = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=c16c75d3b28245be888d6b8a8c192c49');
    const API_URL =`http://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${api_key}`;
    const response = await fetch(API_URL);
    const json = await response.json();
    const articles = json.articles;

    res.render('science.ejs',{  articles:articles

  
    });
    
    
    }catch(err){
      if(err.response){
        console.log(err.response);
      }else if(err.request){
        console.log(err.request);
      }
      else{
        console.error('Error',err.message)
      }
    }
    
    
    
    
  
  
  });
  
 //business
 

 app.get('/business',async (req, res) =>{
  try{
    //const newsAPI = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=c16c75d3b28245be888d6b8a8c192c49');
    const API_URL =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${api_key}`;
    const response = await fetch(API_URL);
    const json = await response.json();
    const articles = json.articles;

    res.render('business.ejs',{  articles:articles

  
    });
    
    
    }catch(err){
      if(err.response){
        console.log(err.response);
      }else if(err.request){
        console.log(err.request);
      }
      else{
        console.error('Error',err.message)
      }
    }
    
    
    
    
  
  
  });
  




app.listen( process.env.PORT|| 3000, function(req,res){
  console.log("runnig...");
});
