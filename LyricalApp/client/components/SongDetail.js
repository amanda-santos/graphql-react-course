import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import FETCH_SONG from '../queries/fetchSong';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

function SongDetail(props) {
  const id = props.match.params.id;
  const { loading, error, data } = useQuery(FETCH_SONG, {
    variables: { id },
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <Link to="/">Back</Link>
      <h3>{data.song.title}</h3>
      <LyricList lyrics={data.song.lyrics} />
      <LyricCreate songId={id} />
    </div>
  );
}

export default SongDetail;
