import { useParams } from 'react-router-dom';

export function Profile() {
    const { username } = useParams();

    console.log(username);
    return <h1>Profile</h1>;
}
