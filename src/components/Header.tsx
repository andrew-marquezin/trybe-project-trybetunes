import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import { UserType } from '../types';

function Header() {
  const [user, setUser] = useState<UserType>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUser().then((caughtUser) => {
      setUser(caughtUser);
      setLoading(false);
    });
  }, []);

  if (loading) return <h2>Carregando...</h2>;

  return (
    <header data-testid="header-component">
      <NavLink to="/search" data-testid="link-to-search">Search</NavLink>
      <NavLink to="/favorites" data-testid="link-to-favorites">Favorites</NavLink>
      <NavLink to="/profile" data-testid="link-to-profile">Profile</NavLink>
      <span data-testid="header-user-name">{user?.name}</span>
    </header>
  );
}

export default Header;
