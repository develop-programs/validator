import mongoose from "mongoose"


export default async function connect() {
    mongoose.set('strictPopulate', false);
    try {
        if (mongoose.connection.readyState === mongoose.ConnectionStates.connected) {
            return console.log("Database already connected");
        }
        await mongoose.connect(`${process.env.DATABASE_URL}`, {
            maxPoolSize: 100,
            dbName: "learning"
        })
        console.log("Database connected")
    } catch (error) {
        console.log("Error connecting to database")
        console.log(error)
    }
}

export async function disconnect() {
    try {
        if (mongoose.connection.readyState === mongoose.ConnectionStates.connected) {
            await mongoose.disconnect()
            console.log("Database disconnected")
        }
    } catch (error) {
        console.log("Error disconnecting from database")
        console.log(error)
    }
}