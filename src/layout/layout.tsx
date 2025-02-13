import {Outlet, useNavigation} from 'react-router-dom';
import {Header} from '../ui/header/header';
import Loader from '../components/loader/loader';
import CartOVerview from '../components/cart-overview/cart-overview';

export function Layout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <main className="layout">
      <Header />
      <div className="container">
        <Outlet />
        {isLoading && <Loader />}
      </div>
      <CartOVerview />
    </main>
  );
}
