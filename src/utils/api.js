import { axios_api } from '../api/axios_api';

const api = (() => {
  function putAuthUserLocalStorage(authUser) {
    localStorage.setItem('authUser', JSON.stringify(authUser));
  }

  function _getAuthUserLocalStorage() {
    return JSON.parse(localStorage.getItem('authUser'));
  }

  //   function _fetchWithAuth(url, config = {}) {
  //     return axios_api({ ...config });
  //   }

  async function _getUserByEmail({ email }) {
    try {
      const { data } = await axios_api.get('/users', {
        params: {
          email: email.trim(),
        },
      });
      return { data };
    } catch (error) {
      console.log(error);
    }
  }

  async function register({ fullName, email, password }) {
    try {
      // Email validation
      const { data: validation } = await _getUserByEmail({ email });
      if (validation.length) {
        return {
          data: null,
          error: true,
          message: `User with email:${email} is already exist!`,
        };
      }

      // Post
      const { data } = await axios_api.post('/users', {
        id: `user-${+new Date()}`,
        fullName,
        email,
        password,
        referralCode: `REF-${email}`,
      });

      if (!Object.keys(data).length) {
        return { data: null, error: true, message: data };
      }

      return { data, error: false, message: 'success' };
    } catch (error) {
      console.log(error);
      return { data: null, error: true, message: error };
    }
  }

  async function login({ email, password }) {
    try {
      const { data } = await axios_api.get('/users', {
        params: {
          email: email.trim(),
          password: password.trim(),
        },
      });

      if (!data.length) {
        return { error: true, data: null, message: 'Wrong email/password!' };
      }

      return { error: false, data: data[0], message: 'success' };
    } catch (error) {
      console.log(error);
      return { data: null, error: true, message: error };
    }
  }

  async function getOwnProfile() {
    try {
      const { data } = await axios_api.get(
        `/users/${_getAuthUserLocalStorage().id}`
      );

      if (!Object.keys(data).length) {
        return { error: true, data: null, message: data };
      }

      return { error: false, data, message: 'success' };
    } catch (error) {
      console.log(error);
      return { data: null, error: true, message: error };
    }
  }

  async function getAllUsers() {
    try {
      const { data } = await axios_api.get('/users');
      return { data, error: false, message: 'success' };
    } catch (error) {
      return { data: null, error: true, message: error };
    }
  }

  async function getAllProducts() {
    try {
      const { data } = await axios_api.get('/products');
      return { data, error: false, message: 'success' };
    } catch (error) {
      console.log(error);
      return { data: null, error: true, message: error };
    }
  }

  async function getProductDetail(productId) {
    try {
      const { data } = await axios_api.get(`/products/${productId}`);
      return { data, error: false, message: 'success' };
    } catch (error) {
      console.log(error);
      return { data: null, error: true, message: error };
    }
  }

  async function createProduct({
    userId,
    title,
    imageUrl,
    category,
    country,
    provice,
    city,
    address,
    description,
    startAt,
    price,
    capacity,
    currentCapacity,
  }) {
    try {
      const { data } = await axios_api.post('/products', {
        id: `product-${+new Date()}`,
        userId,
        title,
        imageUrl,
        category,
        country,
        provice,
        city,
        address,
        description,
        startAt,
        price,
        capacity,
        currentCapacity,
      });
      return { data, error: false, message: 'success' };
    } catch (error) {
      console.log(error);
      return { data: null, error: true, message: error };
    }
  }

  async function editProduct({
    productId,
    userId,
    title,
    imageUrl,
    category,
    country,
    provice,
    city,
    address,
    description,
    startAt,
    price,
    capacity,
    currentCapacity,
  }) {
    try {
      const { data } = await axios_api.patch(`/products/${productId}`, {
        userId,
        title,
        imageUrl,
        category,
        country,
        provice,
        city,
        address,
        description,
        startAt,
        price,
        capacity,
        currentCapacity,
      });
      return { data, error: false, message: 'success' };
    } catch (error) {
      console.log(error);
      return { data: null, error: true, message: error };
    }
  }

  async function deleteProduct(productId) {
    try {
      const { data } = await axios_api.delete(`/products/${productId}`);
      return { data, error: false, message: 'success' };
    } catch (error) {
      console.log(error);
      return { data: null, error: true, message: error };
    }
  }

  async function createReferralLog({ inviterUserId, receiverUserId }) {
    try {
      const { data } = await axios_api.post('/referralLogs', {
        inviterUserId,
        receiverUserId,
        isUsedByInviter: false,
        isUsedBySender: false,
      });
      return { data, error: false, message: 'success' };
    } catch (error) {
      console.log(error);
      return { data: null, error: true, message: error };
    }
  }

  async function getTotalUnusedReferralByInviter(inviterUserId) {
    try {
      const { data } = await axios_api.get('/referralLogs', {
        params: { inviterUserId, isUsedByInviter: false },
      });
      return { data, error: false, message: 'success' };
    } catch (error) {
      console.log(error);
      return { data: null, error: true, message: error };
    }
  }

  async function getTotalUnusedReferralByReceiver(receiverUserId) {
    try {
      const { data } = await axios_api.get('/referralLogs', {
        params: { receiverUserId, isUsedByReceiver: false },
      });
      return { data, error: false, message: 'success' };
    } catch (error) {
      console.log(error);
      return { data: null, error: true, message: error };
    }
  }

  async function createOrder({ userId, productId, productTotal, discount }) {
    try {
      const dateTime = String(+new Date());
      const { data } = await axios_api.get('/orders', {
        id: `order-${dateTime}`,
        userId,
        productId,
        productTotal,
        discount,
        priceTotal: productTotal * (1 - discount),
        createdAt: dateTime,
      });
      return { data, error: false, message: 'success' };
    } catch (error) {
      console.log(error);
      return { data: null, error: true, message: error };
    }
  }

  return {
    putAuthUserLocalStorage,
    // _getAuthUserLocalStorage,
    register,
    login,
    getOwnProfile,
    getAllUsers,
    getAllProducts,
    getProductDetail,
    createProduct,
    editProduct,
    deleteProduct,
    createReferralLog,
    getTotalUnusedReferralByInviter,
    getTotalUnusedReferralByReceiver,
    createOrder,
  };
})();

export default api;
