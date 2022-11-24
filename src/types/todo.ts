//Create an interface representing a document in MongoDB.

import { Document } from "mongoose";
export interface ITodo extends Document {
    name: String
    description: String
    status: Boolean
}
