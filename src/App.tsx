import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import Layout from './pages/Layout';

import { Categories } from './pages/Categories';
import { Home } from './pages/Home';

const navItems = [
  { name: 'Home', path: '/', component: <Home /> },
  { name: 'Categories', path: '/categories', component: <Categories /> },
];

export const App = () => {
  return (
    <Layout header={<Header navItems={navItems} />}>
      <Routes>
        {navItems.map(({ path, component }) => (
          <>
            <Route path={path} element={component} />
          </>
        ))}
      </Routes>
    </Layout>
  );
};
