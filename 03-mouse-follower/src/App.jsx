import { useEffect, useState } from 'react';

import { FollowMouse } from './components/FollowMouse.jsx';

export const App = () => {
    const [enabled, setEnabled] = useState(false)

    return (
        <main>
            <FollowMouse enabled={enabled}/>
            <button onClick={() => setEnabled(!enabled)}>
                {enabled ? 'Desactivar' : 'Activar'} seguir puntero
            </button>
        </main>
    )
}