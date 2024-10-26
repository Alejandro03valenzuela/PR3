function ProductModal({ product, onClose }) {
    return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
        <div className="bg-white p-8 rounded shadow">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="mt-2">{product.description}</p>
          <button onClick={onClose} className="mt-4 bg-red-500 text-white py-2 px-4">Cerrar</button>
        </div>
      </div>
    );
  }
  
  export default ProductModal;
  