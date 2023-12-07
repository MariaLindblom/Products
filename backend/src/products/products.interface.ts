import { Document } from 'mongoose';

export interface Product extends Document {
    readonly id: Number;
    readonly name: String;
    readonly price: Number;
}
