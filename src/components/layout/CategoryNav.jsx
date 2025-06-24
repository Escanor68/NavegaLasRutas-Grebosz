import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchCategories } from '../../services/api';
import { createCategoryData } from '../../utils/categoryUtils';
import { Grid, List } from 'lucide-react';

const CategoryNav = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categoryData = await fetchCategories();
        setCategories(createCategoryData(categoryData));
      } catch (error) {
        console.error('Error cargando categorías:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  if (loading) {
    return (
      <div className="category-nav py-3">
        <div className="container">
          <div className="d-flex gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="placeholder-glow">
                <span className="placeholder col-3" style={{ width: '80px', height: '20px' }}></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="category-nav py-3">
      <div className="container">
        <div className="d-flex gap-2 overflow-auto">
          <Link
            to="/productos"
            className={`category-link d-flex align-items-center ${!categoryId ? 'active' : ''}`}
          >
            <Grid size={16} className="me-2" />
            Todos
          </Link>
          
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/categoria/${category.id}`}
              className={`category-link d-flex align-items-center ${
                categoryId === category.id ? 'active' : ''
              }`}
            >
              <List size={16} className="me-2" />
              {category.displayName}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;