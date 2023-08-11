const ActionType = {
  TOGGLE: 'TOGGLE',
};

function isCreateProductButtonCloseOnClickActionCreator() {
  return {
    type: ActionType.TOGGLE,
  };
}

export { ActionType, isCreateProductButtonCloseOnClickActionCreator };
