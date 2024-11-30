import { Link } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.min.css';


const AddProducts = () => {
    const handleAddProucts = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const manufacturer = e.target.manufacturer.value;
        const supplier = e.target.supplier.value;
        const price = e.target.price.value;
        const category = e.target.category.value;
        const description = e.target.description.value;
        const photo = e.target.photo.value;
    
        const allProducts = { name, manufacturer, supplier, price, category, description, photo };
         
        fetch('http://localhost:5000/products',{
          method:"POST",
          headers:{
            'content-type' : 'application/json'
          },
          body:JSON.stringify(allProducts)
        })
        .then(res=>res.json())
        .then(data=>{
         if(data.acknowledged){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Product has been saved",
            showConfirmButton: false,
            timer: 1500
          });
         }
        })
    
        
    };
    
    
  return ( 
    <div className="bg-[#f3f4f6] min-h-screen flex items-center justify-center py-12 px-4">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-4xl p-10">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            to="/"
            className="text-gray-500 text-sm flex items-center hover:text-gray-800 transition"
          >
            <i className="fas fa-arrow-left mr-2"></i> Back to Home
          </Link>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Add New Product
          </h2>
          <p className="text-gray-600">
            Easily manage your products by adding new details below. Provide all
            the required information to ensure a seamless inventory system.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleAddProucts}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Product Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Product Name
              </label>
              <input
                required
                name="name"
                type="text"
                placeholder="Enter product name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Manufacturer */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Manufacturer
              </label>
              <input
                name="manufacturer"
                type="text"
                placeholder="Enter manufacturer name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Supplier */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Supplier
              </label>
              <input
                name="supplier"
                type="text"
                placeholder="Enter supplier name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Price (USD)
              </label>
              <input
                name="price"
                type="number"
                placeholder="Enter product price"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Category
              </label>
              <input
                name="category"
                type="text"
                placeholder="Enter product category"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Enter product description"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Photo */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">
                Product Image URL
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Enter image URL"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
