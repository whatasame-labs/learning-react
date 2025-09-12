import { getImageUrl } from '../common/utils.js';
import { people } from '../common/data.js';

function ListSection({ title, people }) {
  return (
    <section>
      <h1>{title}</h1>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function List() {
  const chemists = people.filter((person) => person.profession === 'chemist');
  const everyoneElse = people.filter((person) => person.profession !== 'chemist');

  return (
    <article>
      <h1>Scientists</h1>
      <ListSection title="Chemists" people={chemists} />
      <ListSection title="Everyone else" people={everyoneElse} />
    </article>
  );
}
