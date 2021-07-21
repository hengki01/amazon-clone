import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux'; 
import { addToCart, removeFromCart } from '../slices/cartSlice';

export default function CheckoutProduct({
  id,
  title,
  rating,
  price,
  description,
  category,
  image,
  hasPrime
}) { 

  const dispatch = useDispatch();

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

  const removeItemFromCart = () => {
    dispatch(removeFromCart({ id }));
  }; 

  return (
    <div className='grid grid-cols-5'>
      <Image
        src={image}
        height={200}
        width={200}
        objectFit='contain'
      />

      <div className='col-span-3 mx-5'>
        <p>{title}</p>
        <div className='flex'>
          {
             Array(rating).fill().map((_, i ) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))
          }
        </div>

        <p className='text-xs my-2 line-clamp-3'>{description}</p>
          <Currency
            quantity={price}
            currency='USD'
          /> 

          {
            hasPrime && (
              <div className='flex items-center space-x-2'>
                <img
                  loading='lazy'
                  className='w-12'
                  src='https://hengki-portfolio.s3.ap-southeast-1.amazonaws.com/prime-tag.png'
                />
                <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
              </div>
            )
          }
      </div>
      <div className='flex flex-col space-y-2 my-auto justify-self-end'>
        <button onClick={addItemToCart} className="mt-auto button">Add to Cart</button>
        <button onClick={removeItemFromCart} className="mt-auto button">Remove from Cart</button>
      </div>
    </div>  
  ) 
}
