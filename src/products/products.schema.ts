import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number
})

export interface Product extends mongoose.Document {
    id: Number;
    name: String;
    price: Number;
}