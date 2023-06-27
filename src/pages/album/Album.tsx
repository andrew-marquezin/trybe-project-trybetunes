import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getMusics from '../../services/musicsAPI';
import { AlbumType, SongType } from '../../types';
import MusicCard from '../../components/MusicCard';

function Album() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [album, setAlbum] = useState<AlbumType>();
  const [songs, setSongs] = useState<SongType[]>([]);

  useEffect(() => {
    getMusics(id ?? '').then((data) => {
      setLoading(false);
      const [collection] = data;
      const music = data.slice(1) as SongType[];
      setAlbum(collection);
      setSongs(music);
    });
  }, [id]);

  if (loading) return <h1>Carregando...</h1>;

  return (
    <div>
      <h1>Album Page</h1>
      <h2 data-testid="artist-name">{album?.artistName}</h2>
      <h4 data-testid="album-name">{album?.collectionName}</h4>
      {songs.map((e) => (
        <MusicCard
          key={ e.trackId }
          trackId={ e.trackId }
          trackName={ e.trackName }
          previewUrl={ e.previewUrl }
        />
      ))}
    </div>
  );
}

export default Album;
