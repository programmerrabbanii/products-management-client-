import React from 'react';

const FeaturesSection = () => {
  return (
    <div className="py-12 ">
      <div className="container  text-center w-11/12 mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-[#f3a953]">Why Choose Our Product?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img src="https://i.ibb.co.com/hX6VSHH/van-tay-media-9buwienn-Nqg-unsplash.jpg" alt="Feature 1" className="h-40 w-full object-cover rounded-t-lg mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Feature One</h3>
            <p className="text-gray-600 mb-4">
              Our product provides an intuitive user interface that enhances the overall user experience, making it easy to navigate and use.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img src="https://i.ibb.co.com/WtmGMcz/hillary-ungson-Tdp-SX7-XAc-Ko-unsplash.jpg" alt="Feature 2" className="h-40 w-full object-cover rounded-t-lg mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Feature Two</h3>
            <p className="text-gray-600 mb-4">
              With seamless integration, our product ensures that it works well with your existing tools and systems, saving you time and effort.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img src="https://i.ibb.co.com/M1fxnr0/jasmin-schreiber-JE4i-HJE-kn-I-unsplash.jpg" alt="Feature 3" className="h-40 w-full object-cover rounded-t-lg mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Feature Three</h3>
            <p className="text-gray-600 mb-4">
              Our product is built for scalability, ensuring it can handle your growth and adapt to your evolving business needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
