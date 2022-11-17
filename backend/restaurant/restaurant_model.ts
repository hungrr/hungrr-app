
import mongoose from 'mongoose';
const Schema = mongoose.Schema

export interface IRestaurant extends mongoose.Document {
    business_status : string,
    geometry: object,
    icon: string,
    icon_background_color: string;
    icon_mask_base_uri: string,
    name: string,
    opening_hours: object,
    photos: object, //WRONG
    place_id: string,
    plus_code: object,
    price_level: number,
    rating: number,
    reference: string,
    scope: string,
    types: object, // WRONG
    user_ratings_total: number,
    vicinity: string
}

export const restaurantSchema = new Schema({
    business_status: {
        type: String,
        required: true
    },
    geometry: {
        type: Object,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    icon_background_color: {
        type: String,
        required: true
    },
    icon_mask_base_uri: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    opening_hours: {
        type: Object,
        required: true
    },
    photos: {
        type: Array,
        required: true
    },
    place_id: {
        type: String,
        required: true
    },
    plus_code: {
        type: Object,
        required: true
    },
    price_level: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    reference: {
        type: String,
        required: true
    },
    scope: {
        type: String,
        required: true
    },
    types: {
        type: Array,
        required: true
    },
    user_ratings_total: {
        type: Number,
        required: true
    },
    vicinity: {
        type: String,
        required: true
    }
}, { timestamps: true});

const restaurant = mongoose.model<IRestaurant>('Restaurant', restaurantSchema);
export default restaurant;




/*
export interface IUser extends mongoose.Document {
  name: string; 
  somethingElse?: number; 
};

export const UserSchema = new mongoose.Schema({
  name: {type:String, required: true},
  somethingElse: Number,
});

const User = mongoose.model<IUser>('User', UserSchema);
export default User;

*/

// ------------------