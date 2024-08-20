const express = require('express');
const app = express();
const path = require('path')
app.use(express.json())
require('./db/connection');

const cors = require('cors');
app.use(cors());
app.use(express.static(path.join(__dirname + "/public")))

app.get('/*', function (req, res) {
      res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });
const Enquiry = require('./Models/Enquiry')

app.post("/",async(req,res)=>{
   let enquiry = new Enquiry(req.body);
   let result = await enquiry.save();
   res.send(result)
})

app.listen(4000)