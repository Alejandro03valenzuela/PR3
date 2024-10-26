import React, { useState } from 'react';
import products from './data/products.json';
import ProductModal from './components/ProductModal';

function Catalog() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filter, setFilter] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-8">
      <input
        type="text"
        placeholder="Filtrar productos"
        onChange={(e) => setFilter(e.target.value)}
        className="border p-2"
      />
      <div className="grid grid-cols-3 gap-4 mt-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="p-4 bg-gray-100">
            <h3 className="text-xl font-bold">{product.name}</h3>
            <button
              className="mt-2 bg-blue-500 text-white py-1 px-4"
              onClick={() => setSelectedProduct(product)}
            >
              Ver más
            </button>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}

export default Catalog;
