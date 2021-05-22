import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import SongsList from './SongsList';
import FETCH_SONGS from '../queries/fetchSongs';

function Home() {
  const { loading, error, data, refetch } = useQuery(FETCH_SONGS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <SongsList songs={data.songs} refetch={refetch} />
      <Link to="/songs/new" className="btn-floating btn-large blue right">
        <i className="material-icons">add</i>Add song
      </Link>
    </div>
  );
}

export default Home;
