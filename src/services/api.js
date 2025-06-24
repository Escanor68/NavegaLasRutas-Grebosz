const API_BASE_URL = 'https://fakestoreapi.com';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchProducts = async () => {
  await delay(800);
  const response = await fetch(`${API_BASE_URL}/products`);
  if (!response.ok) {
    throw new Error('Error al cargar productos');
  }
  return response.json();
};

export const fetchProductsByCategory = async (category) => {
  await delay(800);
  const response = await fetch(`${API_BASE_URL}/products/category/${category}`);
  if (!response.ok) {
    throw new Error(`Error al cargar productos de la categoría: ${category}`);
  }
  return response.json();
};

export const fetchProductById = async (id) => {
  await delay(600);
  const response = await fetch(`${API_BASE_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error(`Error al cargar producto con id: ${id}`);
  }
  return response.json();
};

export const fetchCategories = async () => {
  await delay(400);
  const response = await fetch(`${API_BASE_URL}/products/categories`);
  if (!response.ok) {
    throw new Error('Error al cargar categorías');
  }
  return response.json();
};