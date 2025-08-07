// ~/context/MuteContext.js
import { createContext, useState } from 'react';

export const MuteContext = createContext();

export function MuteProvider({ children }) {
    const [isMuted, setIsMuted] = useState(true); // 🔴 Mặc định là true

    return <MuteContext.Provider value={{ isMuted, setIsMuted }}>{children}</MuteContext.Provider>;
}
