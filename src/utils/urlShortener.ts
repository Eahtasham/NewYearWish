// Simple URL shortening using a compact encoding
const BASE62 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export const shortenText = (text: string): string => {
  const buffer = new TextEncoder().encode(text);
  let result = '';
  
  for (let i = 0; i < buffer.length; i += 3) {
    const chunk = ((buffer[i] || 0) << 16) + 
                 ((buffer[i + 1] || 0) << 8) + 
                 (buffer[i + 2] || 0);
    
    result += BASE62[Math.floor(chunk / (62 * 62))] +
              BASE62[Math.floor((chunk / 62) % 62)] +
              BASE62[chunk % 62];
  }
  
  return result;
};