import { createAction, handleActions } from 'redux-actions';

const SWITCH_VISIBLE = 'profileMenu/SWITCH_VISIBLE';
const HIDE = 'profileMenu/HIDE';

export const switchVisible = createAction(SWITCH_VISIBLE);
export const hide = createAction(HIDE);

const initialState = {
  isVisible: false,
};

export default handleActions(
  {
    [SWITCH_VISIBLE]: (state) => ({ ...state, isVisible: !state.isVisible }),
    [HIDE]: (state) => ({ ...state, isVisible: false }),
  },
  initialState
);
