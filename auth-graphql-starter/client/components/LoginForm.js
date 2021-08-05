import React, { useState, useEffect } from 'react';
import AuthForm from './AuthForm';
import mutation from '../mutations/Login';
import query from '../queries/CurrentUser';
import { graphql } from 'react-apollo';
import { useHistory } from 'react-router-dom';

function LoginForm({ data, mutate }) {
  const [errors, setErrors] = useState([]);

  let history = useHistory();

  useEffect(() => {
    if (data.user) {
      history.push('/dashboard');
    }
  }, [data.user]);

  const onSubmit = ({ email, password }) =>
    mutate({
      variables: {
        email,
        password,
      },
      refetchQueries: [{ query }],
    }).catch((res) => {
      const errors = res.graphQLErrors.map((error) => error.message);
      setErrors(errors);
    });

  return (
    <div>
      <h3>Login</h3>
      <AuthForm errors={errors} onSubmit={onSubmit} />
    </div>
  );
}

export default graphql(query)(graphql(mutation)(LoginForm));
