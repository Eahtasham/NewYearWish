const DEFAULT_MESSAGE = "Wishing you a spectacular New Year filled with endless possibilities, joy, and success! May 2024 bring you everything your heart desires. 🎉✨";

export const encodeWishParams = (name: string, message: string = DEFAULT_MESSAGE): string => {
  const params = new URLSearchParams();
  
  // Always encode the name to handle special characters
  params.append('from', encodeURIComponent(name));
  
  // Only add message if it's different from default
  if (message && message !== DEFAULT_MESSAGE) {
    params.append('msg', encodeURIComponent(message));
  }
  
  return params.toString();
};

export const decodeWishParams = (search: string) => {
  const params = new URLSearchParams(search);
  try {
    const name = decodeURIComponent(params.get('from') || '');
    if (!name) return null;
    
    // If no message in params, use default
    const message = params.get('msg') 
      ? decodeURIComponent(params.get('msg') || '')
      : DEFAULT_MESSAGE;
      
    return { name, message };
  } catch {
    return null;
  }
};

export const getShareableUrl = (baseUrl: string, name: string, message: string = DEFAULT_MESSAGE): string => {
  // Ensure baseUrl doesn't end with a slash
  const cleanBaseUrl = baseUrl.replace(/\/+$/, '');
  const params = encodeWishParams(name, message);
  return `${cleanBaseUrl}?${params}`;
};