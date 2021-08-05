import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import fetchSongs from '../queries/fetchSongs';
import deleteSong from '../mutations/deleteSong';

function SongList({ mutate, data }) {
  const onSongDelete = (id) =>
    mutate({ variables: { id } }).then(() => data.refetch());

  const renderSongs = () => {
    if (data.loading) {
      return <div>Loading...</div>;
    }
    return data.songs.map(({ id, title }) => (
      <li className="collection-item" key={id}>
        <Link to={`/songs/${id}`}>{title}</Link>
        <i className="material-icons" onClick={() => onSongDelete(id)}>
          delete
        </i>
      </li>
    ));
  };

  return (
    <div>
      <ul className="collection">{renderSongs()}</ul>
      <Link to="/songs/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
}

export default graphql(deleteSong)(graphql(fetchSongs)(SongList));
