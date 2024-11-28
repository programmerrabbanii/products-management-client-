import React from 'react';

const BlogSection = () => {
  return (
    <div className="py-12 w-11/12 mx-auto">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#f3a953]">Latest Blog Posts on Product Management</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Post 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img src="https://i.ibb.co.com/D8NCrPK/list-planning-concept.jpg" alt="Product Management Strategies" className="h-40 w-full object-cover rounded-t-lg mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Effective Product Management Strategies</h3>
            <p className="text-gray-600 mb-4">
              A successful product management strategy includes understanding customer needs, prioritizing features, and aligning the product roadmap with business objectives...
            </p>
            <a href="/blog/product-management-strategies" className="text-[#f3a953] font-semibold hover:underline">Read More</a>
          </div>
          {/* Blog Post 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img src="https://i.ibb.co.com/Tq0rjB7/woman-creating-their-own-vision-board.jpg" alt="Creating a Product Roadmap" className="h-40 w-full object-cover rounded-t-lg mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">How to Build a Product Roadmap</h3>
            <p className="text-gray-600 mb-4">
              A product roadmap is essential for guiding your team toward achieving product milestones. Learn how to create an actionable roadmap that aligns with your product vision...
            </p>
            <a href="/blog/product-roadmap" className="text-[#f3a953] font-semibold hover:underline">Read More</a>
          </div>
          {/* Blog Post 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img src="https://i.ibb.co.com/qRyv4Sr/woman-creating-their-own-vision-board-1.jpg" alt="Customer Feedback in Product Management" className="h-40 w-full object-cover rounded-t-lg mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Leveraging Customer Feedback in Product Development</h3>
            <p className="text-gray-600 mb-4">
              Customer feedback is crucial to enhancing product quality. In this post, we discuss the best practices for collecting, analyzing, and implementing customer feedback...
            </p>
            <a href="/blog/customer-feedback" className="text-[#f3a953] font-semibold hover:underline">Read More</a>
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default BlogSection;
