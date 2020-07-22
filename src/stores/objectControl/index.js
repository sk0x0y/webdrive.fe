import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

const GET = 'objectControl/GET';
const SWITCH_CHECK = 'objectControl/SWITCH_CHECK';
const SWITCH_CHECK_ALL = 'objectControl/SWITCH_CHECK_ALL';

export const get = createAction(GET);
export const switchCheck = createAction(SWITCH_CHECK);
export const checkAll = createAction(SWITCH_CHECK_ALL);

const initialState = {
  objectList: [
    {
      name: '움집고.jpg',
      size: '300 KB',
      owner: '관리자',
      updated: '2020-07-21 오전 01:18',
      checked: false,
    },
    {
      name: '움막고.jpg',
      size: '800 KB',
      owner: '관리자',
      updated: '2020-07-21 오전 02:32',
      checked: false,
    },
    {
      name: '텐트고.jpg',
      size: '1.2 MB',
      owner: '관리자',
      updated: '2020-07-21 오전 02:32',
      checked: false,
    },
  ],
};

export default handleActions(
  {
    [GET]: (state) => state,
    // eslint-disable-next-line consistent-return
    [SWITCH_CHECK]: (state, action) => {
      return produce(state, (draft) => {
        for (let i = 0; i < draft.objectList.length; i += 1) {
          if (action.payload === i)
            // eslint-disable-next-line no-param-reassign
            draft.objectList[i].checked = !draft.objectList[i].checked;
        }
      });
    },
    [SWITCH_CHECK_ALL]: (state, action) => {
      return produce(state, (draft) => {
        for (let i = 0; i < draft.objectList.length; i += 1) {
          // eslint-disable-next-line no-param-reassign
          draft.objectList[i].checked = !action.payload;
        }
      });
    },
  },
  initialState
);
