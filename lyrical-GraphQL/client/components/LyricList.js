import React from 'react';
import likeLyric from '../mutations/likeLyric';
import { graphql } from 'react-apollo';

function LyricList({ mutate, lyrics }) {
  const onLike = (id, likes) =>
    mutate({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id,
          __typename: 'LyricType',
          likes: likes + 1,
        },
      },
    });

  const renderLyrics = () => {
    return lyrics.map(({ id, content, likes }) => (
      <li key={id} className="collection-item">
        {content}
        <div className="vote-box">
          <i onClick={() => onLike(id, likes)} className="material-icons">
            thumb_up
          </i>
          {likes}
        </div>
      </li>
    ));
  };

  return <ul className="collection">{renderLyrics()}</ul>;
}

export default graphql(likeLyric)(LyricList);
