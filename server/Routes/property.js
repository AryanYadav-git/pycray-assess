const { PrismaClient } = require('@prisma/client');
const express = require('express');
const router = express.Router();

const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  console.log('in property');
  try{
    const data = await prisma.property.findMany({});
   res.send({message:"Ff Overview", data})
  }
  catch(e){
    res.status(500).send({message:"Error fetching data", error:e})
    console.log(e);
  }
})

module.exports = router;