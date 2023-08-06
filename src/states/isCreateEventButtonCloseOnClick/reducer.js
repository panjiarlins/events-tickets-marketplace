import { ActionType } from './action';

function isCreateEventButtonCloseOnClickReducer(
  isCreateEventButtonCloseOnClick = false,
  action = {}
) {
  switch (action.type) {
    case ActionType.type:
      return action.payload.toggle;

    default:
      return isCreateEventButtonCloseOnClick;
  }
}

export default isCreateEventButtonCloseOnClickReducer;
