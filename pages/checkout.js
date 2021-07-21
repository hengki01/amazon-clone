import Header from '../components/Header'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../slices/cartSlice'
import CheckoutProduct from '../components/CheckoutProduct'
import { useSession } from 'next-auth/client'
import Currency from 'react-currency-formatter';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(process.env.stripe_public_key);

export default function checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal)
  const [session] = useSession();

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    const checkoutSession = await axios.post('/api/create-checkout-session', {
      items: items,
      email: session.user.email
    });

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id
    })

    if(result.error) {
      alert(result.error.message)
    }
  }

  return (
    <div>
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left */}
        <div className='flex-grow m-5 shadow-sm'>
          <Image 
            src='https://hengki-portfolio.s3.ap-southeast-1.amazonaws.com/half-banner.png'
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              { items.length === 0
                ? 'Your shopping cart is empty.'
                : 'Shopping Cart'
              } 
            </h1>

            {
              items.map((item, i) => {
                return(
                  <CheckoutProduct
                    key={i}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    description={item.description}
                    category={item.category}
                    image={item.image}
                    hasPrime={item.hasPrime}
                  />
                )
              })
            }
          </div>
        </div>
 
        {/* right */}
        <div className='flex flex-col bg-white p-10 shadow-md'>
           {items.length > 0 && (
             <>
              <h2 className='whitespace-nowrap'>
                Subtotal ({items.length} items):{' '}
                <span className='font-bold'>
                  <Currency
                    quantity={total}
                    currency='USD'
                  />
                </span>
              </h2>

              <button
                role='link'
                onClick={createCheckoutSession}
                disabled={!session}
                className={
                `button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`
              }>
                {!session ? 'Sign in to checkout' : 'Proceed to checkout' }
              </button>
             </>
           )}
        </div>
      </main>
    </div>
  )
}
