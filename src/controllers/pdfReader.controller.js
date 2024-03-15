
// const express = require('express');
// const pdf = require('pdf-parse');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(bodyParser.json());



// const readPdfcontentApi = async (req, res)=> {

//     const base64PDF = req.body.pdfBase64;

//   if (!base64PDF) {
//     return res.status(400).send('No base64 PDF provided');
//   }

//   const buffer = Buffer.from(base64PDF.split(',')[1], 'base64');
//   pdf(buffer)
//     .then((parsedData) => {
//       res.send(parsedData.text);
//     })
//     .catch((error) => {
//       console.error('Error parsing PDF:', error);
//       res.status(500).send('Error parsing PDF');
//     });
  
// }


// module.exports = {readPdfcontentApi: readPdfcontentApi}




const express = require('express');
const pdf = require('pdf-parse');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());


function extractLotteryResult(text, prizeType) {
  const regex = new RegExp(`${prizeType}: ([A-Za-z0-9]+)`, 'i');
  const match = text.match(regex);
  return match ? match[1] : null;
}


const readPdfcontentApi = async (req, res)=> {

  const base64PDF = req.body.pdfBase64;

    if (!base64PDF) {
        return res.status(400).send('No base64 PDF provided');
    }

    const buffer = Buffer.from(base64PDF.split(',')[1], 'base64');

    try {
        const parsedData = await pdf(buffer);
        const text = parsedData.text;

        const firstPrice = extractLotteryResult(text, 'firstprice');
        const secondPrice = extractLotteryResult(text, 'secondprice');

        res.json({ firstPrice, secondPrice });
    } catch (error) {
        console.error('Error parsing PDF:', error);
        res.status(500).send('Error parsing PDF');
    }
  
}


module.exports = {readPdfcontentApi: readPdfcontentApi}