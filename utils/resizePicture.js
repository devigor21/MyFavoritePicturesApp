const BASE_URL = 'https://picsum.photos';

export function resizePicture(id, width, height) {
  return `${BASE_URL}/id/${id}/${Math.floor(width)}/${Math.floor(height)}`;
}
