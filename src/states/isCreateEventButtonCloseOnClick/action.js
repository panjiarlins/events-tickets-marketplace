const ActionType = {
  TOGGLE: 'TOGGLE',
};

function isCreateEventButtonCloseOnClickActionCreator(toggle) {
  console.log('ok', toggle);
  return {
    type: ActionType.TOGGLE,
    payload: {
      toggle,
    },
  };
}

export { ActionType, isCreateEventButtonCloseOnClickActionCreator };
