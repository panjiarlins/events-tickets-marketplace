import { ActionType } from './action';

function userTransactionsReducer(userTransactions = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_USER_TRANSACTIONS:
      return action.payload.userTransactions;

    case ActionType.CREATE_USER_TRANSACTION:
      return [action.payload.userTransaction, ...userTransactions];

    default:
      return userTransactions;
  }
}

export default userTransactionsReducer;
