import { createStore } from 'redux';
import modules from './modules';

type State = {}

// TODO: 미들웨어 및 react-hot-loader 적용하기
const configureStore = (initialState?: State) => {
  const store = createStore(modules, window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']())
  return store;
}

export default configureStore;