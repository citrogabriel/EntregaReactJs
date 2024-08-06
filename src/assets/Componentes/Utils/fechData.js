import items from "../Item/Items";

export const getProducts = (category) => {

  let filteredItems = [items]

  if (category) {
    filteredItems = items.filter((items) =>
      item.category.includes(category)
    );
  }

  return new Promise((resolve, reject) => {
    if (items.length > 0) {
      setTimeout(() => {
        resolve(filteredItems);
      }, 2000);
    } else {
      reject("No hay productos disponibles");
    }
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    const product = items.find((items) => item.id === parseInt(id));
    setTimeout(() => {
      if (product) {
          resolve(product);
      } else {
        reject("No se encontro el producto");
      }
    }, 1000);
  });
}
