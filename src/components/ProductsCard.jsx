import { FaEye, FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const ProductsCard = ({product,}) => {
  const {name,manufacturer,supplier,price,category,description,photo,_id}=product
    

   
    return (
        <div>
           
             <div className="card card-side bg-base-100 shadow-xl flex items-center py-10">
        <figure>
          <img src={photo} alt="Coffee" className="w-40 h-40 object-cover" />
        </figure>
        <div className="card-body flex-1">
          <p>
            <span className="text-lg font-semibold">Name:</span> {name}
          </p>
          <p>
            <span className="text-lg font-semibold">Chef:</span> {manufacturer}
          </p>
          <p>
            <span className="text-lg font-semibold">Prices:</span> ${price}
          </p>
        </div>
        {/* Icon Section */}
        <div className="flex flex-col items-center justify-center space-y-4 pr-4">
          <FaEye className="cursor-pointer text-blue-500 text-2xl hover:text-blue-700" />
         <Link to={`/products/${_id}`}>
         <FaRegEdit  className="cursor-pointer text-green-500 text-2xl hover:text-green-700" />
         </Link>
          <MdDeleteForever
          onClick={()=>handleDlete(_id)}
            
            className="cursor-pointer text-red-500 text-2xl hover:text-red-700"
          />
        </div>
      </div>
        </div>
    );
};

export default ProductsCard;