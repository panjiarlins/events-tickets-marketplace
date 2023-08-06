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

function asyncRegisterUser({ fullName, email, password }) {
  return async () => {
    try {
      console.log('ok');
      await api.register({ fullName, email, password });
    } catch (error) {
      console.log(error);
    }
  };
}

export {
  ActionType,
  receiveUsersActionCreator,
  asyncReceiveUsers,
  asyncRegisterUser,
};
