const http = require('http');

// Dummy product data for men and women
const menProducts = [
  { 
    id: 1, 
    name: `Men's Shirt`,
    brand: 'ABC',
    price: 19.99,
    color: "blue",
    size: 'XL',
    category: 'clothing',
 },
 
  { 
    id: 2, 
    name: `Men's Shirt`,
    brand: 'ABC',
    price: 19.99,
    color: "blue",
    size: 'XL',
    category: 'clothing',
 },
 
  { 
    id: 3, 
    name: `Men's Shirt`,
    brand: 'ABC',
    price: 19.99,
    color: "blue",
    size: 'XL',
    category: 'clothing',
 },
 
  { 
    id: 4, 
    name: `Men's Shirt`,
    brand: 'ABC',
    price: 19.99,
    color: "blue",
    size: 'XL',
    category: 'clothing',
 },
 
  { 
    id: 5, 
    name: `Men's Shirt`,
    brand: 'ABC',
    price: 19.99,
    color: "blue",
    size: 'XL',
    category: 'clothing',
 },
 
  { 
    id: 6, 
    name: `Men's Shirt`,
    brand: 'ABC',
    price: 19.99,
    color: "blue",
    size: 'XL',
    category: 'clothing',
 },
 
  { 
    id: 7, 
    name: `Men's Shirt`,
    brand: 'ABC',
    price: 19.99,
    color: "blue",
    size: 'XL',
    category: 'clothing',
 },
 
  { 
    id: 8, 
    name: `Men's Shirt`,
    brand: 'ABC',
    price: 19.99,
    color: "blue",
    size: 'XL',
    category: 'clothing',
 },
 
  { 
    id: 9, 
    name: `Men's Shirt`,
    brand: 'ABC',
    price: 19.99,
    color: "blue",
    size: 'XL',
    category: 'clothing',
 },
 
  { 
    id: 10, 
    name: `Men's Shirt`,
    brand: 'ABC',
    price: 19.99,
    color: "blue",
    size: 'XL',
    category: 'clothing',
 },
 
  

];

const womenProducts = [
    { 
        id: 1, 
        name: `Women's Jeans`,
        brand: 'ABC',
        price: 19.99,
        color: "blue",
        size: 'XL',
        category: 'clothing',
     },
     
      { 
        id: 2, 
        name: `Women's Jeans`,
        brand: 'ABC',
        price: 19.99,
        color: "blue",
        size: 'XL',
        category: 'clothing',
     },
     
      { 
        id: 3, 
        name: `Women's Jeans`,
        brand: 'ABC',
        price: 19.99,
        color: "blue",
        size: 'XL',
        category: 'clothing',
     },
     
      { 
        id: 4, 
        name: `Women's Jeans`,
        brand: 'ABC',
        price: 19.99,
        color: "blue",
        size: 'XL',
        category: 'clothing',
     },
     
      { 
        id: 5, 
        name: `Women's Jeans`,
        brand: 'ABC',
        price: 19.99,
        color: "blue",
        size: 'XL',
        category: 'clothing',
     },
     
      { 
        id: 6, 
        name: `Women's Jeans`,
        brand: 'ABC',
        price: 19.99,
        color: "blue",
        size: 'XL',
        category: 'clothing',
     },
     
      { 
        id: 7, 
        name: `Women's Jeans`,
        brand: 'ABC',
        price: 19.99,
        color: "blue",
        size: 'XL',
        category: 'clothing',
     },
     
      { 
        id: 8, 
        name: `Women's Jeans`,
        brand: 'ABC',
        price: 19.99,
        color: "blue",
        size: 'XL',
        category: 'clothing',
     },
     
      { 
        id: 9, 
        name: `Women's Jeans`,
        brand: 'ABC',
        price: 19.99,
        color: "blue",
        size: 'XL',
        category: 'clothing',
     },
     
      { 
        id: 10, 
        name: `Women's Jeans`,
        brand: 'ABC',
        price: 19.99,
        color: "blue",
        size: 'XL',
        category: 'clothing',
     },

];

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Send welcome message
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Men & Women Dummy Data');
  } else if (req.url === '/men') {
    // Send men's products data
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(menProducts));
  } else if (req.url === '/women') {
    // Send women's products data
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(womenProducts));
  } else {
    // Send page not found response
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
