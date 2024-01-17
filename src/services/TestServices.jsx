/* import requests from "./httpService";

const ProductServices = {
  getAllProduct: async ({
    page = 1,
    limit = 10,
    price = "",
    category = "",
    searchText = "",
  }) => {
    return requests.get(
      `/product?searchText=${searchText}&category=${category}&price=${price}&page=${page}&limit=${limit}`
    );
  },
  singleCreateProduct: async (body) => {
    return requests.post("/product", body);
  },
  getSingleProduct: async (id) => {
    return requests.get(`/product/${id}`);
  },
  singleUpdateProduct: async (id, body) => {
    return requests.put(`/product/${id}`, body);
  },
  singleUpdateProductStatus: async (id, body) => {
    return requests.put(`/product/status/${id}`, body);
  },
  singleUpdateProductFeatured: async (id, body) => {
    return requests.put(`/product/featured/${id}`, body);
  },
  singleDeleteProduct: async (id, body) => {
    return requests.delete(`/product/${id}`, body);
  },
};

export default ProductServices; */
