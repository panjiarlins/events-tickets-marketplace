import api from '../../utils/api';

const ActionType = {
  RECEIVE_USER_TRANSACTIONS: 'RECEIVE_USER_TRANSACTIONS',
  CREATE_USER_TRANSACTION: 'CREATE_USER_TRANSACTION',
};

function receiveUserTransactionsActionCreator(userTransactions) {
  return {
    type: ActionType.RECEIVE_USER_TRANSACTIONS,
    payload: {
      userTransactions,
    },
  };
}

function createUserTransactionActionCreator(userTransaction) {
  return {
    type: ActionType.CREATE_USER_TRANSACTION,
    payload: {
      userTransaction,
    },
  };
}

function asyncReceviveUserTransactions({ userId }) {
  return async (dispatch) => {
    try {
      const { data } = await api.getUserTransactions({ userId });
      dispatch(receiveUserTransactionsActionCreator(data));
    } catch (error) {
      console.log(error);
    }
  };
}

function asyncCreateUserTransaction({
  userId,
  productId,
  price,
  priceTotal,
  productTotal,
  usedPromotionPoint,
  usedReferralPoint,
  referralPoint,
  voucherCode,
}) {
  return async (dispatch) => {
    try {
      const { data: userTransaction } = await api.createTransaction({
        userId,
        productId,
        price,
        priceTotal,
        productTotal,
        usedPromotionPoint,
        usedReferralPoint,
        referralPoint,
        voucherCode,
      });
      dispatch(createUserTransactionActionCreator(userTransaction));

      //   const { data: authUser } = await api.getOwnProfile();
      //   dispatch(setAuthUserActionCreator(authUser));

      return { data: userTransaction, error: false, message: 'success' };
    } catch (error) {
      console.log(error);
    }
  };
}

export {
  ActionType,
  receiveUserTransactionsActionCreator,
  createUserTransactionActionCreator,
  asyncReceviveUserTransactions,
  asyncCreateUserTransaction,
};
