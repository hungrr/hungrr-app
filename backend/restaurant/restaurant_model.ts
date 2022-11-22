
import mongoose from 'mongoose';
const Schema = mongoose.Schema

export interface IRestaurant extends mongoose.Document {
    business_status : string,
    // geometry.location is the coordinates of the place which is probably all we need
    geometry: object,
    // we don't need the icon, that's just the default Google Maps pin
    // icon: string,
    // icon_background_color: string;
    // icon_mask_base_uri: string,
    name: string,
    opening_hours: object,
    photos: object, //WRONG
    // place_id and reference seem to be the same thing
    place_id: string,
    // don't think we need plus_code, seems like weird lat long
    // plus_code: object,
    price_level: number,
    rating: number,
    // reference: string,
    // scope: string,
    // types: object, // WRONG
    user_ratings_total: number,
    // geometry.location probably has a better precise location
    // vicinity: string
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
    price_level: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    user_ratings_total: {
        type: Number,
        required: true
    },
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