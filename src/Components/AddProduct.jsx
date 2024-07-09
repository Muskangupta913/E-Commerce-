import React, { useState } from 'react';

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const addProduct = async () => {
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }
    console.warn(name, price, category, company);
    const userId = JSON.parse(localStorage.getItem('user'))._id;
    let result = await fetch('http://localhost:5000/add-product', {
      method: 'POST',
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    result = await result.json();
    console.warn(result);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Add Product</h1>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Enter product name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={name} onChange={(e) => setName(e.target.value)}
        />
        {error && !name && <span className="text-red-500 text-sm">Enter valid name</span>}

        <input
          type="text"
          placeholder="Enter product price"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={price} onChange={(e) => setPrice(e.target.value)}
        />
        {error && !price && <span className="text-red-500 text-sm">Enter valid price</span>}

        <input
          type="text"
          placeholder="Enter product category"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={category} onChange={(e) => setCategory(e.target.value)}
        />
        {error && !category && <span className="text-red-500 text-sm">Enter valid category</span>}

        <input
          type="text"
          placeholder="Enter product company"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={company} onChange={(e) => setCompany(e.target.value)}
        />
        {error && !company && <span className="text-red-500 text-sm">Enter valid company</span>}

        <button
          onClick={addProduct}
          className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Product
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
