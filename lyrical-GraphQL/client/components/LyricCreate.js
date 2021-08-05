import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import addLyricToSong from '../mutations/addLyricToSong';

function LyricCreate({ mutate, songId }) {
  const [content, setContent] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    mutate({
      variables: {
        content,
        songId,
      },
    });

    setContent('');
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Add a lyric</label>
      <input
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
    </form>
  );
}

export default graphql(addLyricToSong)(LyricCreate);
