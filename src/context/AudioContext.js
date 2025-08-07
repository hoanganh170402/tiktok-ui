import { createContext, useState } from 'react';

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
    const [isMuted, setIsMuted] = useState(true); // luôn mặc định mute khi reload
    const [volume, setVolume] = useState(0.5); // volume tạm thời cho tất cả video

    return <AudioContext.Provider value={{ isMuted, setIsMuted, volume, setVolume }}>{children}</AudioContext.Provider>;
};
