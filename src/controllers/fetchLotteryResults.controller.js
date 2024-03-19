
const admin = require('../firebase/firebase');


const fetchLotteryResultsApi = async (req, res)=> {

    try {
    
        const snapshot = await admin.database().ref('/lotteryResultsData').once('value');
    const data = snapshot.val();
  

        res.json({status: 200, lotteryResults: data, pdfLink: data.pdfUrl})
       
      } catch (error) {
        res.json({status: 500, message: 'Something went wrong, please retry', error: error})
        throw error;
      }
}

const fetchSingleLotteryByIdApi = async (req, res)=> {
  const id = req?.body.id
  try {
  
      const snapshot = await admin.database().ref('/lotteryResultsData').once('value');
  const data = snapshot.val();

  const lotteryResult = data.lotteries

  const filteredResultById = lotteryResult?.filter((item)=> item?.id === id)

      res.json({status: 200, resultById: filteredResultById})
     
    } catch (error) {
      res.json({status: 500, message: 'Something went wrong, please retry', error: error})
      throw error;
    }
}


module.exports = {fetchLotteryResultsApi: fetchLotteryResultsApi, fetchSingleLotteryByIdApi: fetchSingleLotteryByIdApi}