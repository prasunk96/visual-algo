  
import { combineReducers } from 'redux';
import appReducer from '../../features/Body/reducer';

const rootReducer = combineReducers({
    app: appReducer
});

export default rootReducer;