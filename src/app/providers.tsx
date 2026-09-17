'use client'

import React, { useMemo } from 'react'
import { Provider } from 'react-redux';
import { store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import { Flip, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const persistor = useMemo(() => persistStore(store), []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {children}
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Flip}
        />
      </PersistGate>
    </Provider>
  );
};

export default Providers;