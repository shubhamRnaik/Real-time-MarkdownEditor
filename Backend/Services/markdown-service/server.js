const app = require('express')()
const PORT = 4000; // move this to dotend at final











app.listen(PORT,(err)=>{

    if(err){
        console.log(err)
    }

    console.log(`Server is running fine on port ${PORT}`)

})






