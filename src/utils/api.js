import { axios_api } from '../api/axios_api';

const api = (() => {
  function putAuthUserLocalStorage(authUser) {
    localStorage.setItem(
      'authUser',
      JSON.stringify({ id: authUser.id, fullName: authUser.fullName })
    );
  }

  function _getAuthUserLocalStorage() {
    return JSON.parse(localStorage.getItem('authUser'));
  }

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

  async function _getUserByReferralCode({ referralCode }) {
    try {
      const { data } = await axios_api.get('/users', {
        params: {
          referralCode: referralCode.trim(),
        },
      });
      return { data };
    } catch (error) {
      console.log(error);
    }
  }

  async function _addReferralPoint({ userId, value, currentValue }) {
    try {
      await axios_api.patch(`/users/${userId}`, {
        referralPoint: currentValue + value,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function register({ fullName, email, password, referralCode }) {
    try {
      // email validation
      const { data: emailData } = await _getUserByEmail({ email });
      if (emailData.length) {
        return {
          data: null,
          error: true,
          message: `User with email:${email} is already exist!`,
        };
      }

      if (referralCode.trim()) {
        // referralCode validation
        const { data: inviterUserData } = await _getUserByReferralCode({
          referralCode,
        });
        if (!inviterUserData.length) {
          return {
            data: null,
            error: true,
            message: `Refferral Code: ${referralCode} is not found!`,
          };
        }

        // Add referralPoint to inviterUser
        await _addReferralPoint({
          userId: inviterUserData[0].id,
          value: 50000,
          currentValue: inviterUserData[0].referralPoint,
        });
      }

      // Post
      const { data } = await axios_api.post('/users', {
        id: `user-${+new Date()}`,
        fullName,
        email,
        password,
        referralCode: `REF-${email}`,
        referralPoint: referralCode.trim() ? 50000 : 0,
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
      console.log('User belum login!');
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
    country,
    province,
    city,
    address,
    description,
    startAt,
    price,
    capacity,
  }) {
    try {
      const { data } = await axios_api.post('/products', {
        id: `product-${+new Date()}`,
        userId,
        title,
        imageUrl,
        country,
        province,
        city,
        address,
        description,
        startAt,
        price: Number(price),
        capacity: Number(capacity),
        currentCapacity: 0,
      });
      return { data, error: false, message: 'success' };
    } catch (error) {
      console.log(error);
      return { data: null, error: true, message: error };
    }
  }

  async function editProduct(productId, productDetail = {}) {
    try {
      const { data } = await axios_api.patch(`/products/${productId}`, {
        ...productDetail,
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
    register,
    login,
    getOwnProfile,
    getAllUsers,
    getAllProducts,
    getProductDetail,
    createProduct,
    editProduct,
    deleteProduct,
    createOrder,
  };
})();

export default api;
