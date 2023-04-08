import { render, screen } from '@testing-library/react';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Components/Redux/store';
test('renders react component', async () => {
  render(
    <Provider store={store}>
<HashRouter>
    <App/>
</HashRouter>
</Provider>

  );
});
