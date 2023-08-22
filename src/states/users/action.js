import api from '../../utils/api';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncReceiveUsers() {
  return async (dispatch) => {
    try {
      const { data: users } = await api.getAllUsers();
      dispatch(receiveUsersActionCreator(users));
    } catch (error) {
      console.log(error);
    }
  };
}

function asyncRegisterUser({
  fullName, email, password, referralCode,
}) {
  return async () => {
    try {
      const response = await api.register({
        fullName,
        email,
        password,
        referralCode,
      });
      return response;
    } catch (error) {
      console.log(error);
      return { data: null, error: true, message: error };
    }
  };
}

export {
  ActionType,
  receiveUsersActionCreator,
  asyncReceiveUsers,
  asyncRegisterUser,
};
