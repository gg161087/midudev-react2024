import { useState } from 'react'

import './FollowCard.css';

export const FollowCard = ({name, userName, initialsIsFollowing }) => {

    const [isFollowing, setIsFollowing] = useState(initialsIsFollowing)

    const buttonText = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'follow-card__btn-seguiendo' : 'follow-card__btn-seguir';

    const handlerClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='follow-card'>
            <header className='follow-card__header'>
                <img className='follow-card__avatar' src={`https://unavatar.io/${userName}`} alt="el avatar de gg" />
                <div>
                    <strong>{name}</strong>
                    <span>@{userName}</span>
                </div>
            </header>   
            <aside>
                <button className={buttonClassName} onClick={handlerClick}>
                    <span className='follow-card__text'>{buttonText}</span>                    
                    <span className='follow-card__stop-follow'>Dejar de seguir</span>
                </button>
            </aside>        
        </article>
    )
}