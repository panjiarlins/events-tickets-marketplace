import { ActionType } from './action';

function isCreateProductButtonCloseOnClickReducer(
  isCreateProductButtonCloseOnClick = true,
  action = {}
) {
  switch (action.type) {
    case ActionType.TOGGLE:
      return !isCreateProductButtonCloseOnClick;

    default:
      return isCreateProductButtonCloseOnClick;
  }
}

export default isCreateProductButtonCloseOnClickReducer;
