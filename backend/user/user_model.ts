
// Imports
import mongoose from 'mongoose';
const Schema = mongoose.Schema

export interface IUser extends mongoose.Document {
    name: string,
    phonenum: string,
}

export const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    favorites: {
        type: Array,
        required: true
    }
})

const user = mongoose.model<IUser>('User', userSchema);
export default user;