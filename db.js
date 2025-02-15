const {MongoClient} = require('mongodb');

let dbConnection;

module.exports={

    connectTodb:(cb)=>{
        MongoClient.connect('mongodb://localhost:27017/kutuphane')
        .then((client)=>{
            dbConnection=client.db()
            return cb()
        }).catch(
            err=>{
                console.log(err)
            return cb(err)
            }
        )
    },
    getDb: ()=> dbConnection
}