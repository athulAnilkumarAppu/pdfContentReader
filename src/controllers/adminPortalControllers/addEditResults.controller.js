const admin = require('../../firebase/firebase');


const addTodaysResultsApi = async (req, res)=> {

    const todaysData = req.body

    try {

        const prevResult = await admin.database().ref('/dateWiseFullResults').once('value');
        const prevData = prevResult.val();
    
        const docRef = await admin.database().ref('/dateWiseFullResults')
       
        
        await docRef.set({...prevData, ...todaysData});
  
        res.json({status: 200, message: 'Result added successfully'})
       
      } catch (error) {
        res.json({status: 500, message: 'Something went wrong, please retry', error: error})
        throw error;
      }
}

const updateResultsAdminPortalApi = async (req, res)=> {

    const id = req.body.id
    const data = req.body.updatedData

    try {

        const prevResult = await admin.database().ref('/dateWiseFullResults').once('value');
        const prevData = prevResult.val();

       const modData = {...prevData, [id]: data}

        const docRef = await admin.database().ref('/dateWiseFullResults')
        await docRef.set(modData);
  
        res.json({status: 200,  message: 'Result updated successfully'})
       
      } catch (error) {
        res.json({status: 500, message: 'Something went wrong, please retry', error: error})
        throw error;
      }
}

const deleteResultsAdminPortalApi = async (req, res)=> {

    const id = req.body.id

    try {

        const prevResult = await admin.database().ref('/dateWiseFullResults').once('value');
        const prevData = prevResult.val();

    
            const modData = Object.keys(prevData)
            .map((item) => prevData[item])
            .filter((item) => item.id !== id)
            .reduce((acc, curr) => {
            acc[curr.id] = curr;
            return acc;
            }, {});

        const docRef = await admin.database().ref('/dateWiseFullResults')
        await docRef.set(modData);
  
        res.json({status: 200,  message: 'Result deleted successfully'})
       
      } catch (error) {
        res.json({status: 500, message: 'Something went wrong, please retry', error: error})
        throw error;
      }
}


const getAllResultsAdminPortalApi = async (req, res)=> {

    try {

        const prevResult = await admin.database().ref('/dateWiseFullResults').once('value');
        const prevData = prevResult.val();
  
        res.json({status: 200, fullResult: prevData, message: 'Result fetched successfully'})
       
      } catch (error) {
        res.json({status: 500, message: 'Something went wrong, please retry', error: error})
        throw error;
      }
}



module.exports = {addTodaysResultsApi: addTodaysResultsApi,
     getAllResultsAdminPortalApi: getAllResultsAdminPortalApi,
     updateResultsAdminPortalApi: updateResultsAdminPortalApi,
     deleteResultsAdminPortalApi: deleteResultsAdminPortalApi}