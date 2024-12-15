import { WishData } from '../types';

export const saveWish = (wishData: WishData) => {
  const wishes = JSON.parse(localStorage.getItem('wishes') || '[]');
  wishes.push(wishData);
  localStorage.setItem('wishes', JSON.stringify(wishes));
};

export const getWish = (id: string): WishData | null => {
  const wishes = JSON.parse(localStorage.getItem('wishes') || '[]');
  return wishes.find((wish: WishData) => wish.id === id) || null;
};