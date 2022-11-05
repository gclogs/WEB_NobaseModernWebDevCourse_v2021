import mongoose, { Connection } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' })

let db: Connection;

class mongoDB {
  constructor() {}
  conn() {
    if (db) return;
    const { MONGO_DB } = process.env;

    mongoose.Promise = global.Promise;
    mongoose.connect(MONGO_DB);

    db = mongoose.connection;
    
    db.once('open', async () => {
      console.log('Connected to MongoDB successfully');
    });

    db.on('error', () => {
      console.log(`Error connecting to databsae. Check Whether mongoDB
      installed or you can try to give opensource Mongo Atlas database`);
    });

    return {}
  }

  disconn() {
    if (!db) {
      return;
    }
    mongoose.disconnect();
  }
}

export default mongoDB;