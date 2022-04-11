import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Results from './pages/Results';
import Freelances from './pages/Freelances';
import Error from './pages/Error';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './utils/context';
import Footer from './components/Footer';
import GlobalStyle from './utils/style/GlobalStyle';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey/:questionNumber" element={<Survey />} />
          <Route path="/results" element={<Results />} />
          <Route path="/freelances" element={<Freelances />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
