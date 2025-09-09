import { db } from "./config/firebase.js";

const products = [
  {
    name: "Camiseta TechLab",
    description: "Camiseta de algodón 100% con logo TechLab",
    price: 25.99,
    stock: 50,
    category: "Ropa"
  },
  {
    name: "Taza Coffee Dev",
    description: "Taza de cerámica para programadores",
    price: 12.5,
    stock: 100,
    category: "Accesorios"
  },
  {
    name: "Libreta de Notas",
    description: "Libreta para organizar tus proyectos",
    price: 8.99,
    stock: 200,
    category: "Papelería"
  },
  {
    name: "Auriculares Bluetooth",
    description: "Auriculares inalámbricos con cancelación de ruido",
    price: 59.99,
    stock: 30,
    category: "Electrónica"
  },
  {
    name: "Mouse Gamer",
    description: "Mouse ergonómico con iluminación RGB",
    price: 39.99,
    stock: 40,
    category: "Electrónica"
  }
];

const seedProducts = async () => {
  try {
    const collection = db.collection("products");

    for (const product of products) {
      const docRef = await collection.add(product);
      console.log(`Producto creado con ID: ${docRef.id}`);
    }

    console.log("Todos los productos de ejemplo fueron creados correctamente.");
    process.exit(0);
  } catch (error) {
    console.error("Error creando productos de ejemplo:", error);
    process.exit(1);
  }
};

seedProducts();
