import { getImageUrl } from '../common/utils.js';

const BIG_SIZE = 90;

export default function Avatar({ person, size }) {
  const imageUrl = getImageUrl(person, calculateThumbnailSize(size));
  return <img className="avatar" src={imageUrl} alt={person.name} width={size} height={size} />;
}

function calculateThumbnailSize(size) {
  if (size > BIG_SIZE) {
    return 'b';
  }

  return 's';
}