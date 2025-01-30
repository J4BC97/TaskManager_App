import { Provider } from 'react-redux';
import { store } from "./store/store"
import { AppRouter, PrivateRoute } from './router';

export const TaskManagerApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};





