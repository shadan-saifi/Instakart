import mongoose, {Document, Schema} from "mongoose"


export interface Message extends Document {
    content : string
    createdAt: Date
}

const MessageSchema: Schema<Message>=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    }
})

const MessageModel = mongoose.models.Message || mongoose.model<Message>('Message', MessageSchema);

export default MessageModel;