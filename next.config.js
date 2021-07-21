module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['hengki-portfolio.s3.ap-southeast-1.amazonaws.com', 'fakestoreapi.com']
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY
  }
}
