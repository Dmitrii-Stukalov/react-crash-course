import {IProduct} from "../models";
import {useState} from "react";

interface ProductProps {
    product: IProduct
}

export function Product({product}: ProductProps) {
    const [details, setDetails] = useState(false);
    const buttonBgClass = details ? 'bg-blue-400' : 'bg-yellow-400';
    const buttonClasses = ['py-2 py-4 border', buttonBgClass];
    return (
        <div
            className="border py-2 px-4 rounded flex flex-col items-center mb-2"
        >
            <img src={product.image} alt={product.title} className="w-1/6"/>
            <p>{product.title}</p>
            <span className="font-bold">{product.price}</span>
            <button
                className={buttonClasses.join(' ')}
                onClick={() => setDetails(prev => !prev)}
            >
                {details ? 'Hide' : 'Show'} Details
            </button>
            {details && <div>
                <p>{product.description}</p>
                <p>Rate: <span style={{fontWeight: 'bold'}}>{product?.rating?.rate}</span></p>
            </div>}
        </div>
    )
}
