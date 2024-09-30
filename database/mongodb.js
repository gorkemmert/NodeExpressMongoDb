const mongoose = require('mongoose');


module.exports = () => {
    const connection = "mongodb+srv://grkmrt1:pallmall_321@node-rest-shop.uv4kwhd.mongodb.net/?retryWrites=true&w=majority&appName=person"

    mongoose.connect(connection)
    .then(() => console.log('Connected!'));

    mongoose.connection.on("open" , ()=> {console.log("success");
    })

    mongoose.connection.on("error", (error) => {console.log(error);
    })
    
}
