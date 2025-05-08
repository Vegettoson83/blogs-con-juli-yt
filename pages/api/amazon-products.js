export default function handler(req, res) {
  const products = [
    {
      asin: 'B09G9FPGTN',
      title: 'Producto 1',
      image: 'https://images-na.ssl-images-amazon.com/images/I/B09G9FPGTN.jpg',
      link: `https://www.amazon.com/dp/B09G9FPGTN/?tag=YOUR_AFFILIATE_TAG`
    },
    {
      asin: 'B08N5WRWNW',
      title: 'Producto 2',
      image: 'https://images-na.ssl-images-amazon.com/images/I/B08N5WRWNW.jpg',
      link: `https://www.amazon.com/dp/B08N5WRWNW/?tag=YOUR_AFFILIATE_TAG`
    },
    {
      asin: 'B07FZ8S74R',
      title: 'Producto 3',
      image: 'https://images-na.ssl-images-amazon.com/images/I/B07FZ8S74R.jpg',
      link: `https://www.amazon.com/dp/B07FZ8S74R/?tag=YOUR_AFFILIATE_TAG`
    }
  ];

  res.status(200).json(products);
}
