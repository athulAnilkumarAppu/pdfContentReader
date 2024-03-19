
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


module.exports = {fetchLotteryResultsApi: fetchLotteryResultsApi}