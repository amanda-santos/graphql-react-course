import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const LIKE_LYRIC = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default function LyricList({ lyrics }) {
  const [likeLyric] = useMutation(LIKE_LYRIC);

  const renderLyrics = () => {
    return lyrics.map(({ id, content, likes }) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <div className="likes-container">
            <i
              style={{ color: 'blue' }}
              className="material-icons"
              onClick={() =>
                likeLyric({
                  variables: { id },
                  optimisticResponse: {
                    __typename: 'Mutation',
                    likeLyric: {
                      id,
                      __typename: 'LyricType',
                      likes: likes + 1,
                    },
                  },
                })
              }
            >
              thumb_up
            </i>
            {likes}
          </div>
        </li>
      );
    });
  };
  return <ul className="collection">{renderLyrics()}</ul>;
}
