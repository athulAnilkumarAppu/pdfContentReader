
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

function extractLotteryResults(text) {
  const results = {};

  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('1st Prize Rs :')) {
      results.firstPrice = lines[i + 1].match(/[A-Z]{2} \d+/)[0];
    } else if (line.startsWith('2nd Prize Rs :')) {
      results.secondPrice = lines[i + 1].match(/[A-Z]{2} \d+/)[0];
    } else if (line.startsWith('3rd Prize Rs :')) {
      const thirdPrizes = [];
      for (let j = i + 1; j < lines.length; j++) {
        const ticketNumberMatch = lines[j].match(/[A-Z]{2} \d+/);
        if (ticketNumberMatch) {
          thirdPrizes.push(ticketNumberMatch[0]);
        } else {
          break; 
        }
      }
      results.thirdPrice = thirdPrizes;
      break; 
    }
  }

  return results;
}

const readPdfcontentApi = async (req, res) => {
  const base64PDF = req.body.pdfBase64;

  if (!base64PDF) {
    return res.status(400).send('No base64 PDF provided');
  }

  const buffer = Buffer.from(base64PDF.split(',')[1], 'base64');

  try {
    const parsedData = await pdf(buffer);
    const text = parsedData.text;

    const extractedResults = extractLotteryResults(text);

    res.json(extractedResults);
  } catch (error) {
    console.error('Error parsing PDF:', error);
    res.status(500).send('Error parsing PDF');
  }
};

module.exports = {readPdfcontentApi: readPdfcontentApi}