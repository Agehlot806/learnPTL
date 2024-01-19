import logo from './logo.svg';
import './App.css';
import NavRoutes from './navigation/routing';
import { Provider } from 'react-redux';
import { persistor, store } from './store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (

    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition="Bounce"
      />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavRoutes />
        </PersistGate>
      </Provider>
      <ToastContainer />
    </>
  );
}

export default App;
