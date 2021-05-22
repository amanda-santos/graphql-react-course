import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const ADD_LYRIC_TO_SONG = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      title
      lyrics {
        id
        content
      }
    }
  }
`;

export default function LyricCreate({ songId }) {
  const [content, setContent] = useState('');
  const [addLyricToSong] = useMutation(ADD_LYRIC_TO_SONG);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setContent('');
        addLyricToSong({ variables: { content, songId } });
      }}
    >
      <label htmlFor="add-lyric">Add a lyric</label>
      <input
        type="text"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
    </form>
  );
}
