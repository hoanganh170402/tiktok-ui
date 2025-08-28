import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import styles from './Live.module.scss';
import NavbarItems from '~/components/NavbarItems';
import * as videoService from '~/services/videoService';
import Loading from '~/components/Loading/Loading';
import VideoLive from './VideoLive';
import SuggestVideo from './SuggestVideo';
import Separate from '~/components/Separate';
import SuggestMenu from './SuggestMenu';
import LiveEvent from './LiveEvent';

const cx = classNames.bind(styles);

const LIVE_NAVBAR = [
    'For You',
    'Following',
    'Gaming',
    'Lifestyle',
    'Garena Free Fire',
    'Mobile Legends: Bang Bang',
    'PUBG Mobile',
    'Roblox',
    'Grand Theft Auto V',
    'Minecraft',
    'Fortnite',
    'Call of Duty: Mobile',
    'Arena of Valor',
    'Call of Duty',
];

function Live() {
    const [isActive, setIsActive] = useState('For You');
    const [listItem, setListItems] = useState([]);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [volume, setVolume] = useState(0.5); // mặc định max âm lượng

    const videoRef = useRef(null);

    const random = Math.floor(Math.random() * 20);

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await videoService.getVideos('for-you', random);
            setListItems(result);
        };
        fetchAPI();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        const rangeInput = document.querySelector(`.${cx('volume-range')}`);
        if (rangeInput) {
            rangeInput.style.setProperty('--volume-percent', `${volume * 100}%`);
        }
    }, [volume]);

    const handlePlayPause = () => {
        if (!videoRef.current) return;

        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleMuteToggle = () => {
        if (!videoRef.current) return;

        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);

        if (videoRef.current) {
            videoRef.current.volume = newVolume;
            if (newVolume === 0) {
                setIsMuted(true);
                videoRef.current.muted = true;
            } else {
                setIsMuted(false);
                videoRef.current.muted = false;
            }
        }

        // set biến CSS cho track fill
        e.target.style.setProperty('--volume-percent', `${newVolume * 100}%`);
    };

    return (
        <div className={cx('wrapper')}>
            <NavbarItems data={LIVE_NAVBAR} isActive={isActive} setIsActive={setIsActive} />

            <div className={cx('video-container')}>
                {listItem.length > 0 ? (
                    <VideoLive
                        videoRef={videoRef}
                        listItem={listItem}
                        isMuted={isMuted}
                        isPlaying={isPlaying}
                        handlePlayPause={handlePlayPause}
                        handleMuteToggle={handleMuteToggle}
                        volume={volume}
                        handleVolumeChange={handleVolumeChange}
                    />
                ) : (
                    <Loading />
                )}

                <Separate />
                <SuggestVideo title={'Games'} perPage={6} />
                <SuggestMenu title={'Suggest Menu'} />

                <LiveEvent title={'Live Event'} />

                <SuggestVideo title={'Esports'} perPage={6} page={20} style={{ marginTop: 20 }} />
            </div>
        </div>
    );
}
export default Live;
