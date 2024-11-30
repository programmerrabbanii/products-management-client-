import { useLoaderData } from "react-router-dom";
import BlogSection from "../components/BlogSection";
import ProductsCard from "../components/ProductsCard";

const Home = () => {
    const allData=useLoaderData()

    return (
        <div> 
           <BlogSection></BlogSection>
           <div>
           <h3 className="mt-10 text-3xl text-center font-semibold capitalize">this is your own product collection here</h3>
           </div>
           <div className="grid grid-cols-1 w-11/12 mx-auto md:grid-cols-2 gap-5">
             {
                allData.map(product=> <ProductsCard product={product} key={product._id}></ProductsCard>)
             }
           </div>
        </div>
    );
};

export default Home;