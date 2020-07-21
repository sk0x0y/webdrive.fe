import { createAction, handleActions } from 'redux-actions';

const SHOW = 'contextMenu/SHOW';
const HIDE = 'contextMenu/HIDE';
const SET_POSITION = 'contextMenu/SET_POSITION';

export const show = createAction(SHOW);
export const hide = createAction(HIDE);
export const setPosition = createAction(SET_POSITION);

const initialState = {
  isVisible: false,
  menuList: ['새 폴더', '업로드', '다운로드', '이동', '복사', '삭제', '공유'],
  position: {
    x: 0,
    y: 0,
  },
};

export default handleActions(
  {
    [SHOW]: (state) => ({ ...state, isVisible: true }),
    [HIDE]: (state) => ({ ...state, isVisible: false }),
    [SET_POSITION]: (state, action) => ({
      ...state,
      position: {
        ...action.payload,
      },
    }),
  },
  initialState
);
