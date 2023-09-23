const image = new URL('./screenshots/image.png', import.meta.url).href

export default {
  title: `Spotted Kingfisher`,
  description: `Help the world's most iconic species`,
  image,
  author: 'Pinegrow',
  url: 'https://spotted-kingfisher-iles-tailwindcss.netlify.app',
  nav: [
    { text: 'Home', link: '/' },
    { text: 'Explore', link: '/explore' },
    { text: 'Contact Us', link: '/contact-us' },
  ],
}
