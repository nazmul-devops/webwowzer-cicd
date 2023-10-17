import mongoose from 'mongoose';

const connectMongoDB = async () => {
    try {
        const dbConnection = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${dbConnection.connection.host}`);
    } catch (error) {
        console.log(error);
    }
};

export default connectMongoDB;
