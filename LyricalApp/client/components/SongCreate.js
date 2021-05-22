import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { Link, useHistory } from 'react-router-dom';

const ADD_SONG = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

function SongCreate() {
  const history = useHistory();
  const [title, setTitle] = useState('');

  const [addSong] = useMutation(ADD_SONG);

  return (
    <div>
      <Link to="/">Back</Link>
      <h4>Add a new song</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addSong({ variables: { title } });
          history.push('/');
        }}
      >
        <label htmlFor="title">Title</label>
        <input
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
      </form>
    </div>
  );
}

export default SongCreate;
