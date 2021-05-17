import mongoose from 'mongoose';
const { Schema } = mongoose;
import {connectionString} from "../credentials.js";
// For security, connectionString should be in a separate file and excluded from git

mongoose.connect(connectionString, {
    dbName: 'it122project',
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

// define data model as JSON key/value pairs
// values indicate the data type of each key
const studentSchema = new Schema({
 name: { type: String, required: true },
 age: { type: Number, required: true },
 classes: { type: String, required: true },
 gender: { type: String, required: true },
});

export const Student = mongoose.model('Student', studentSchema);