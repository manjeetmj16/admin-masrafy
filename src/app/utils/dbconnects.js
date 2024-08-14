import mongoose from "mongoose";

const MONGODB_URI = process.env.mongodburl

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside next.config js file'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 */
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnection () {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      // useNewUrlParser: true,
      // retryWrites: true,
      // bufferCommands: false
      useNewUrlParser: true,
      retryWrites: true,
      bufferCommands: false,
      serverSelectionTimeoutMS: 30000, // 30 seconds
      socketTimeoutMS: 45000 // 45 seconds
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
      console.log("Successfully connected to MongoDB");
      return mongoose
    })
  }
  cached.conn = await cached.promise
  console.log("cached.conn",cached.conn)
  return cached.conn
}

export default dbConnection
