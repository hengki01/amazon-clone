import { useState } from 'react';
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';
 
const MAX_RATING = 5;
const MIN_RATING = 1;

export default function Product({ id, title, price, description, category, image }) {
  const dispatch = useDispatch();
  
  const [rating]  = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  const addItemToCart = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime
    };

    dispatch(addToCart(product));
  }; 

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>

      <Image
        src={image}
        height={200}
        width={200}
        objectFit="contain"
      />

      <h4 className="my-3" >{title}</h4>

      <div className="flex">
        { Array(rating)
          .fill()
          .map((_, i) => {
            return(
              <StarIcon className="h-5 text-yellow-500" />
            )
          })
        }
      </div>

      <p className="text-xs my-2">{description}</p>

      <div className="mb-5">
        <Currency  quantity={price} currency="USD" />
      </div>

      { hasPrime && (
          <div className="flex items-center space-x-2 -mt-5">
            <img src="https://hengki-portfolio.s3.ap-southeast-1.amazonaws.com/prime-tag.png" />
            <p className="text-cs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )
      }

      <button onClick={addItemToCart} className="mt-auto button">Add to Cart</button>
    </div> 
  )
}
