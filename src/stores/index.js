import { combineReducers } from 'redux';
import contextMenu from './contextMenu';
import profileMenu from './profileMenu';

export default combineReducers({
  contextMenu,
  profileMenu,
});
