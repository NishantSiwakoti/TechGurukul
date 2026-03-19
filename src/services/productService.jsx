import db from "../../data/db.json";

export async function getProductList(searchTerm) {
  const term = (searchTerm || "").trim().toLowerCase();
  const products = db.products || [];

  if (!term) {
    return products;
  }

  return products.filter((product) =>
    product.name.toLowerCase().includes(term),
  );
}

export async function getProduct(id) {
  const product = (db.products || []).find(
    (item) => String(item.id) === String(id),
  );

  if (!product) {
    throw { message: "Product not found", status: 404 }; //eslint-disable-line
  }

  return product;
}

export async function getFeaturedList() {
  return db.featured_products || [];
}
