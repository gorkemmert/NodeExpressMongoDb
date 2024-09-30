const mongoose = require('mongoose');


module.exports = () => {
    const connection = "your connection"

    mongoose.connect(connection)
    .then(() => console.log('Connected!'));

    mongoose.connection.on("open" , ()=> {console.log("success");
    })

    mongoose.connection.on("error", (error) => {console.log(error);
    })
    
}
