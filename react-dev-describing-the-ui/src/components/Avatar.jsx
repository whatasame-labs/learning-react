import { getImageUrl } from '../common/utils.js';

export default function Avatar({ person }) {
  return <img className="avatar" src={getImageUrl(person)} alt={person.name} width={50} height={50} />;
}
