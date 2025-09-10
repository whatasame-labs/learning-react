import { getImageUrl } from '../utils/utils.js';

export default function Profile({ imageId, name, profession, awards, discovered, imageSize = 70 }) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img className="avatar" src={getImageUrl(imageId)} alt={name} width={imageSize} height={imageSize} />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length}</b>({awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );
}