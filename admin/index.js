//import express and puppeteer
const express = require('express');
const puppeteer = require('puppeteer');
const fs = require('fs');
var app = express();
//run chrome using puppeteer
//add bodyparser json
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post("/lookat",async (req,res)=>{
    //run chrome without sandbox
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    //go to the url
    await page.goto("http://appctflvl5/link/"+req.body.url);
    //get flag from flag.txt
    var flag = fs.readFileSync('flag.txt', 'utf8');
    //add cookie
    await page.setCookie({name: 'flag', value: flag});
    setTimeout(async (page)=>{
        //click button on page
        await page.click('#openlink');
        //wait 5 sek and close browser
        setTimeout(async (browser)=> {
            await browser.close();
        }, 5000, browser);
    },5000,page);
    res.send("ok");
})
//listen on port 1380
app.listen(1380,()=>{
    console.log("listening on port 1380");
})