import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  firstName: {
    type: String,
    required: true,
    min: 2,
  },
  lastName: {
    type: String,
    required: true,
    min: 2,
  },
  about: {
    type: String,
    min: 25,
  },
  birthday: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    default: 'male',
  },
  wallet: {
    type: Number,
    default: 5000,
  },
  img: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const nftSchema = new mongoose.Schema(
  {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      min: 3,
      max: 50,
    },
    description: {
      type: String,
      required: true,
      max: 120,
    },
    category: {
      type: String,
      required: true,
      default: 'Anime',
    },
    price: {
      type: Number,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.models.User || mongoose.model('User', userSchema);
export const Nft = mongoose.models.Nft || mongoose.model('Nft', nftSchema);
