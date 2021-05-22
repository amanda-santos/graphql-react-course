import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';

const DELETE_SONG = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default function SongsList({ songs, refetch }) {
  const [deleteSong] = useMutation(DELETE_SONG);

  const renderSongs = () => {
    return songs.map(({ id, title }) => {
      return (
        <li key={id} className="collection-item">
          <Link to={`/songs/${id}`}>{title}</Link>
          <i
            className="material-icons"
            onClick={() => {
              deleteSong({ variables: { id } });
              refetch();
            }}
          >
            delete
          </i>
        </li>
      );
    });
  };
  return <ul className="collection">{renderSongs()}</ul>;
}
