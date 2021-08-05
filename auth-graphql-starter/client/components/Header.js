import React from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';
import { Link } from 'react-router-dom';
import mutation from '../mutations/Logout';

function Header({ data, mutate }) {
  const onLogout = () => {
    mutate({ refetchQueries: [{ query }] });
  };

  const renderButtons = () => {
    const { loading, user } = data;

    if (loading) return null;

    if (user) {
      return (
        <li>
          <a onClick={onLogout}>Logout</a>
        </li>
      );
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      );
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">
          Home
        </Link>
        <ul className="right">{renderButtons()}</ul>
      </div>
    </nav>
  );
}

export default graphql(mutation)(graphql(query)(Header));
