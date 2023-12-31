import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number
});

module.exports = mongoose.model("Product", ProductSchema);