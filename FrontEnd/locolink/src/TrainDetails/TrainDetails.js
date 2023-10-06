const express = require("express");
const router = express.Router();
const {getauthToken}=require('')

router.get('/train/trains/:id',async function getTrain(req,res){
    try {
        const token=await getauthToken()
        console.log('token',token)
        