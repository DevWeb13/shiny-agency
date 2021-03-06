import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Results from './pages/Results';
import Freelances from './pages/Freelances';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';
import GlobalStyle from './utils/style/GlobalStyle';
import { Provider } from 'react-redux';
import store from './utils/store';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Router>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey/:questionNumber" element={<Survey />} />
            <Route path="/results" element={<Results />} />
            <Route path="/freelances" element={<Freelances />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
