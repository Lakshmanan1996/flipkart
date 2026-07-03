import mongoose from 'mongoose';

const Connection = async () => {
    const URL = process.env.DB_CONNECTION;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Error: ', error.message);
    }
};

export default Connection;
