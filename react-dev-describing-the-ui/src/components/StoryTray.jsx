export default function StoryTray({ stories }) {
  const storiesToDisplay = stories.slice();

  storiesToDisplay.push({
    id: 'create',
    label: 'Create Story',
  });
  return (
    <ul>
      {storiesToDisplay.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
    </ul>
  );
}
