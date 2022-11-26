
// Imports
import mongoose from 'mongoose';
const Schema = mongoose.Schema

export interface IUser extends mongoose.Document {
    name: string,
    phoneNumber: string,
    favorites: Array<string>
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
        type: Array<string>,
        required: true
    }
})

const User = mongoose.model<IUser>('User', userSchema);
export default User;