import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import store from './src/store';
import Main from './Main';

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
    </Provider>
  );
};
export default App;
