const UserModel = require("../../Model/user.model");
const userRegister = async (req, res) => {
  console.log("register", req.body);
    const { firstName, lastName, email, password } = req.body;
    const missingFields = [];
    //   checking missing fields
    if (!firstName) missingFields.push('firstName');
    if (!lastName) missingFields.push('lastName');
    if (!email) missingFields.push('email');
    if (!password) missingFields.push('password');
  
    if (missingFields.length > 0) {
    const error = missingFields.reduce((acc , current) => {
        acc[current] = `The ${current} field is required` 
        return acc;
    } , {});

      res.status(422).json({      //invalid entry
        status : false,
        message: error,
      });


    } else {
        try {
            const checkUser = await UserModel.find({email});
            if(checkUser?.length > 0){
                res.status(422).json({
                    status : false,
                    message: 'The given Email already registered .',
                    
                  });
            }else{
                const registerUser =  new UserModel({
                    firstName,
                    lastName,
                    email,
                    password
                });
                const saveData = await registerUser.save();
                console.log(saveData);
                return res.status(200).json({
                    status : true,
                    message : "User registered successfully please check your email"
                });
            }
        } catch (error) {
            console.log(error?._message);
          res.status(500).json({
            status : false , 
            message : error?._message
          })   
        }
      
    }
  };
  


  const  userSignIn = async (req, res ) => {
    const { email, password } = req.body;
    console.log("calling", req.body);
    const missingFields  = [];
    if(!email) missingFields.push('email');
    if(!password) missingFields.push('password');
    if(missingFields.length > 0) {
      const error  = missingFields.reduce((previousValue, currentValue) => {
        previousValue[currentValue] = `The Missing field ${currentValue} is required`
        return previousValue;
      } , {});
  
      return res.status(401).json({
        message : "Invalid Data",
        error,
        success : false,
      });
    }
    
    const getUserData = await UserModel.findOne({email : email});
    console.log("user", getUserData);
    if(getUserData) {
      if(getUserData?.password === password){
          return res.status(200).json({
            data : getUserData,
            success : true,
          });
      }else{
        return res.status(401).json({
          message : "Invalid email or password",
          success : false
        })
      }
  
    }else{
      return res.status(401).json({
        message : "Invalid email or password",
        success : false
      })
    }
  }
  
  




module.exports = {
    userRegister,
    userSignIn
}



