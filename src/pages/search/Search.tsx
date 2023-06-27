import { useState } from 'react';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import { AlbumType } from '../../types';
import AlbumCard from '../../components/AlbumCard';

function Search() {
  const [artistValue, setArtistValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [resultList, setResultList] = useState<AlbumType[]>([]);
  const [foiBuscado, setFoiBuscado] = useState(false);
  const [artist, setArtist] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    searchAlbumsAPI(artistValue).then((searchResult) => {
      setArtist(artistValue);
      setLoading(false);
      setFoiBuscado(true);
      setArtistValue('');
      setResultList(searchResult);
    });
  }

  const resultadoDaPesquisa = resultList.length
    ? (
      <>
        <h3>{`Resultado de álbuns de: ${artist}`}</h3>
        {resultList.map((e) => (
          <AlbumCard
            key={ e.collectionId }
            collectionName={ e.collectionName }
            artistName={ e.artistName }
            collectionId={ e.collectionId }
          />
        ))}
      </>
    )
    : <p>Nenhum álbum foi encontrado</p>;

  if (loading) return <h1>Carregando...</h1>;

  return (
    <>
      <h1>Search Page</h1>
      <form
        onSubmit={ handleSubmit }
      >
        <input
          type="text"
          placeholder="Nome do Artista"
          data-testid="search-artist-input"
          value={ artistValue }
          onChange={ ({ target }) => setArtistValue(target.value) }
        />
        <button
          data-testid="search-artist-button"
          disabled={ artistValue.length < 2 }
        >
          Pesquisar
        </button>
      </form>

      <div>
        {foiBuscado && resultadoDaPesquisa}
      </div>
    </>
  );
}

export default Search;
