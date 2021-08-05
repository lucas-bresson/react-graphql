import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import fetchSongs from '../queries/fetchSongs';
import addSong from '../mutations/addSong';

function SongCreate({ mutate, history }) {
  const [title, setTitle] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    mutate({
      variables: { title },
      refetchQueries: [{ query: fetchSongs }],
    })
      .then(() => history.push('/'))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>Create a new song</h3>
      <form onSubmit={onSubmit}>
        <label>SongTitle:</label>
        <input onChange={(e) => setTitle(e.target.value)} value={title} />
      </form>
    </div>
  );
}

export default graphql(addSong)(SongCreate);
