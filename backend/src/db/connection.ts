import { connect, disconnect } from "mongoose";
export default async function connectToDatabase() {
  try {
    await connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
    throw new Error("Cannot Connect to MongoDB");
  }
}

async function disconnectFromDatabase() {
  try {
    disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("Could not Disconnect from MongoDB");
  }
}

export { connectToDatabase, disconnectFromDatabase };
