export const generateWishId = () => {
  return Math.random().toString(36).substring(2, 15);
};

export const saveWish = (wish: any) => {
  const wishes = JSON.parse(localStorage.getItem('wishes') || '[]');
  wishes.push(wish);
  localStorage.setItem('wishes', JSON.stringify(wishes));
  return wish;
};

export const getWish = (id: string) => {
  const wishes = JSON.parse(localStorage.getItem('wishes') || '[]');
  return wishes.find((wish: any) => wish.id === id);
};