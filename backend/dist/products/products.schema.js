"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const mongoose = require("mongoose");
exports.ProductSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number
});
//# sourceMappingURL=products.schema.js.map