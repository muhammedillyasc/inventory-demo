import * as mongoose from 'mongoose';

export const PersonSchema = new mongoose.Schema(
  {
    _id: { type: String },
    personId: String,
    email: String,
    age: Number,
    isSubscribed: Boolean,
  },
  {
    timestamps: true,
  },
);
