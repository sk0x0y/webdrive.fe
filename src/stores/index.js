import { combineReducers } from 'redux';
import contextMenu from './contextMenu';
import profileMenu from './profileMenu';
import objectControl from './objectControl';

export default combineReducers({
  contextMenu,
  profileMenu,
  objectControl,
});
