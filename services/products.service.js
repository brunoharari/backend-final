import * as productModel from "../models/products.model.js";

export const getAllProducts = async () => {
  return await productModel.getAll();
};

export const getProductById = async (id) => {
  return await productModel.getById(id);
};

export const createProduct = async (data) => {
  return await productModel.create(data);
};

export const deleteProduct = async (id) => {
  return await productModel.remove(id);
};
