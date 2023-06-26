import { Link } from 'react-router-dom';
import { AlbumCardType } from '../types';

function AlbumCard({ collectionName, artistName, collectionId }: AlbumCardType) {
  return (
    <div>
      <Link
        to={ `/album/${collectionId}` }
        data-testid={ `link-to-album-${collectionId}` }
      >
        <div>
          <h4>{ collectionName }</h4>
          <h5>{ artistName }</h5>
        </div>
      </Link>
    </div>
  );
}

export default AlbumCard;
