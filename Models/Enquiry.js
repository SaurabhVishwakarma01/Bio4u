const mongoose = require('mongoose');

const EnquirySchema = new mongoose.Schema({
    name:String,
    phnumber:String,
    gmail:String,
    message:String


});

module.exports = mongoose.model("enquiry",EnquirySchema)