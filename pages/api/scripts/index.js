// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '.prisma/client';
import safeJsonStringify from 'safe-json-stringify';
// const Cryptr = require('cryptr');
const crypto = require("crypto");
const algorithm = "des-ecb"; 

const prisma = new PrismaClient();



export default function script(req, res) {

    // const password = 'Steve';
    // // use a hex key here
    // const key = Buffer.from("d0e276d0144890d3", "hex");


    // let ourObject = [
    //     {"email":"lgarza@equibrand.com","password":"Stevenash1"},{"email":"astockton@myhorsesport.com","password":"00004595"} 
    // ]

    // let newData = JSON.stringify(ourObject);
    // let parseData = JSON.parse(newData);





    // parseData.forEach( async (el) => {

    //     console.log(el.password);
    //     const cipher = crypto.createCipheriv(algorithm, key, null);

    //     let encrypted = cipher.update(el.password, 'utf8', 'hex');
    //     encrypted += cipher.final('hex');


    //     const rawSQL = `_U_Customer_Password_ByEmail`;
    //     const result = await prisma.$queryRawUnsafe(`${rawSQL} @Email='${el.email}', @Password='${encrypted}'`)

    //     // let encrypted = cipher.update(el.password, 'utf8', 'hex');
    //     // encrypted += cipher.final('hex');
    //     console.log("Encrypted: ", encrypted);
        
    // })



  





    res.status(200).json({ name: 'John Doe' })
  }
  