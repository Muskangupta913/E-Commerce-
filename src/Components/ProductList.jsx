import React, { useEffect, useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch('http://localhost:5000/products');
    result = await result.json();
    setProducts(result);
  };

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:5000/product/${id}`, {
      method: "DELETE",
    });
    getProducts(); // Refresh the product list after deletion
  };

  return (
    <div className="text-center mt-5">
      <h3 className="text-2xl font-bold mb-4">Product List</h3>
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          <ul className="w-full font-bold text-left border-b border-gray-300 flex">
            <li className="w-1/5 p-2 border-r">S.No</li>
            <li className="w-1/5 p-2 border-r">Name</li>
            <li className="w-1/5 p-2 border-r">Price</li>
            <li className="w-1/5 p-2 border-r">Category</li>
            <li className="w-1/5 p-2">Operation</li>
          </ul>
          {products.map((item, index) => (
            <ul key={index} className="w-full text-left border-b border-gray-300 flex">
              <li className="w-1/5 p-2 border-r">{index + 1}</li>
              <li className="w-1/5 p-2 border-r">{item.name}</li>
              <li className="w-1/5 p-2 border-r">{item.price}</li>
              <li className="w-1/5 p-2 border-r">{item.category}</li>
              <li className="w-1/5 p-2">
                <button 
                  onClick={() => deleteProduct(item._id)} 
                  className="text-red-500 hover:text-red-800"
                >
                  Delete
                </button>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
