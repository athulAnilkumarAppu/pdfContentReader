

const loginApi = async (req, res)=> {

    const username = req.body.username
    const password = req.body.password

    const adminUsername = 'admin@123'
    const adminPassword = 'admin@123'

    try {

        if(username === adminUsername && password === adminPassword){
            res.json({status: 200, status: 'success'})
        }else{
            res.json({status: 401, status: 'unauthorized'})
        }

       
      } catch (error) {
        res.json({status: 500, message: 'Something went wrong, please retry', error: error})
        throw error;
      }
}

module.exports = {loginApi: loginApi}