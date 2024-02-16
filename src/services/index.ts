const BASE_URL = 'http://localhost:3000';

export const fetchNews = async () => {
  try {
    const response = await fetch(`${BASE_URL}/news`);
    if (!response.ok) {
      throw new Error('Error fetching news');
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error('Error making request: ' + error.message);
  }
};
