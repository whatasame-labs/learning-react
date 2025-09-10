import Avatar from './Avatar.jsx';

export default function Profile() {
  return (
    <>
      <Avatar size={40} person={{ name: 'Gregorio Y. Zara', imageId: '7vQD0fP' }}></Avatar>
      <Avatar size={120} person={{ name: 'Gregorio Y. Zara', imageId: '7vQD0fP' }}></Avatar>
    </>
  );
}