import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import Layout from './pages/Layout';

import { Categories } from './pages/Categories';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Footer } from './components/Footer';

const navItems = [
  { name: 'Home', path: '/', component: <Home /> },
  { name: 'Categories', path: '/categories', component: <Categories /> },
  { name: 'Search', path: '/search', component: <Search /> },
];

export const App = () => {
  return (
    <Layout header={<Header navItems={navItems} />} footer={<Footer />}>
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
