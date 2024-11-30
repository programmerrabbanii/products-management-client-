import { useLoaderData } from "react-router-dom";
import BlogSection from "../components/BlogSection";
import FeaturesSection from "../components/FeaturesSection";
import ProductsCard from "../components/ProductsCard";
import { useState } from "react";

const Home = () => {
    const getAllProducts=useLoaderData()
    const [devices,setDevices]=useState(getAllProducts)
    return (
        <div>
           <BlogSection></BlogSection>
           <FeaturesSection></FeaturesSection>
           <div>
           <h3 className="mt-10 text-3xl text-center font-semibold capitalize">this is your own product collection here</h3>
           </div>
           <div className="grid grid-cols-1 w-11/12 mx-auto md:grid-cols-2 gap-5">
           {
              devices.map((product)=> <ProductsCard product={product} setDevices={setDevices} devices={devices} key={product._id} ></ProductsCard>)
            }
           </div>
        </div>
    );
};

export default Home;