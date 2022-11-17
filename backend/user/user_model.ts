
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
    phonenum: {
        type: Object,
        required: true
    }
    //Favorites (coming soon)
})

const user = mongoose.model<IUser>('User', userSchema);
export default user;