const DEFAULT_MESSAGE = "Wishing you a spectacular New Year filled with endless possibilities, joy, and success! May 2024 bring you everything your heart desires. 🎉✨";

export const encodeWishParams = (name: string, message: string): string => {
  const params = new URLSearchParams();
  
  // Always add name
  params.append('from', name);
  
  // Only add message if it's different from default
  if (message !== DEFAULT_MESSAGE) {
    params.append('msg', message);
  }
  
  return params.toString();
};

export const decodeWishParams = (search: string) => {
  const params = new URLSearchParams(search);
  try {
    const name = params.get('from') || '';
    // If no message in params, use default
    const message = params.get('msg') || DEFAULT_MESSAGE;
    return { name, message };
  } catch {
    return null;
  }
};