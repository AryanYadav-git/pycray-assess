const express = require('express');
const router = express.Router();
// import { PrismaClient } from '@prisma/client'
const PrismaClient = require('@prisma/client').PrismaClient;

const prisma = new PrismaClient()


router.get('/', async (req, res) => {
  console.log('in finance');
  try{
    const data = await prisma.finance.findMany({});
   res.send({message:"Ff Overview", data})
  }
  catch(e){
    res.status(500).send({message:"Error fetching data", error:e})
    console.log(e)
  }
  
})

module.exports = router;