const API_KEY = '37044789-04c7a523a36e32b60aee229b0'; // Особистий ключ
const BASE_URL = 'https://pixabay.com/api/';
const PICS_ON_PAGE = 12;

// Функція для отримання пошуку
export const getSearch = (searchText, page) => {

  // Параметри для запиту
  const params = new URLSearchParams({
    q: searchText,
    page: page,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: PICS_ON_PAGE,
  });

  return fetch(`${BASE_URL}?${params}`);
};