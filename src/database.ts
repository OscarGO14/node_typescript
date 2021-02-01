import mongoose,{ConnectionOptions} from 'mongoose'
import config from './config'

(async () =>{
    const mongooseOptions:ConnectionOptions = {
        useUnifiedTopology:true,
        useNewUrlParser:true,
        useCreateIndex:true
    }
    const db = await mongoose.connect(`mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@clustergratis.t6w83.mongodb.net/${config.MONGO_DATABASE}?retryWrites=true&w=majority`,mongooseOptions)
    console.log('Database is connected to: ',db.connection.name)
} 
)()