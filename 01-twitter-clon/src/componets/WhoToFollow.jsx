import { FollowCard } from './FollowCard.jsx';

import './WhoToFollow.css';

export const WhoToFollow = () => {
    const users = [
        {
            userName: 'midudev',
            name: 'Miguel Ángel Durán',
            isFollowing: true,
        },
        {
            userName: 'gg161087',
            name: 'Gonzalo Gonzalez',
            isFollowing: false,
        },
        {
            userName: 'PacoHdezs',
            name: 'Paco Hdez',
            isFollowing: true,
        }
    ]
    return (
        <section className='who-to-follow'>
            <h3>Who To Follow</h3>
            {users.map(user => {
                const { userName, name, isFollowing } = user
                return (
                    <FollowCard key={userName} name={name} userName={userName} initialsIsFollowing={isFollowing}></FollowCard>
                )
            })}           
        </section>
    )
};