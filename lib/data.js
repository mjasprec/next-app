import { Nft, User } from './model';
import { connectToDb } from './utils';

export const getNfts = async () => {
  try {
    connectToDb();
    const nfts = await Nft.find();
    return nfts;
  } catch (error) {
    console.log('GET NFTs ERROR: ', error);
    throw new Error('Failed to fetch NTFs');
  }
};

export const getNft = async (id) => {
  try {
    connectToDb();
    const nft = await Nft.find((nft) => nft.id === id);
    return nft;
  } catch (error) {
    console.log('GET NFT ERROR: ', error);
    throw new Error('Failed to fetch NFT');
  }
};

export const getUser = async (id) => {
  try {
    connectToDb();
    const user = await User.findById((user) => user.id === id);
    return user;
  } catch (error) {
    console.log('GET USER ERROR: ', error);
    throw new Error('Failed to fetch user');
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log('GET USERS ERROR: ', error);
    throw new Error('Failed to fetch users');
  }
};
