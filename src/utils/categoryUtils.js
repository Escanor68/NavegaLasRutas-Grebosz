export const formatCategoryName = (category) => {
  const categoryNames = {
    'electronics': 'Electrónicos',
    'jewelery': 'Joyería',
    'men\'s clothing': 'Ropa Hombre',
    'women\'s clothing': 'Ropa Mujer'
  };
  
  return categoryNames[category] || category
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const createCategoryData = (categories) => {
  return categories.map(category => ({
    id: category,
    name: category,
    displayName: formatCategoryName(category)
  }));
};