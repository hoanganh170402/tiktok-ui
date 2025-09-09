import { useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './UploadVideo.module.scss';
import { HOCamera, HOFolder, HOidea, HOQuanlity, IMGUpload } from '~/components/Icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const SUGGEST_LIST = [
    {
        icon: HOCamera,
        heading: 'Size and duration',
        text: 'Maximum size: 30 GB, video duration: 60 minutes.',
    },
    {
        icon: HOFolder,
        heading: 'File formats',
        text: 'Recommended: “.mp4”. Other major formats are supported.',
    },
    {
        icon: HOQuanlity,
        heading: 'Video resolutions',
        text: 'High-resolution recommended: 1080p, 1440p, 4K.',
    },
    {
        icon: HOidea,
        heading: 'Aspect ratios',
        text: 'Recommended: 16:9 for landscape, 9:16 for vertical.',
    },
];

export default function UploadVideo() {
    const fileInputRef = useRef(null);
    const [fileName, setFileName] = useState('');

    const handleClickInput = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName('');
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('action-wrapper')}>
                <div className={cx('action')} onClick={handleClickInput}>
                    <input
                        type="file"
                        accept="video/*"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    <div className={cx('upload-wrapper')}>
                        <IMGUpload />
                        <p>Select video to upload</p>
                        <span className={cx('title')}> Or drag and drop it here</span>

                        <Button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleClickInput();
                            }}
                            primary
                            style={{
                                marginTop: 10,
                                width: 208,
                                height: 36,
                                fontSize: '1.5rem',
                                fontWeight: '400',
                                borderRadius: 8,
                            }}
                        >
                            Select video
                        </Button>

                        {/* Hiển thị tên file nếu có */}
                        {fileName && <p className={cx('file-name')}>{fileName}</p>}
                    </div>
                </div>
            </div>
            <div className={cx('suggest-list')}>
                {SUGGEST_LIST.map((item, index) => (
                    <div key={index} className={cx('suggest-item')}>
                        <div className={cx('sg-icon')}>{<item.icon width="2rem" height="2.4rem" />}</div>
                        <div className={cx('sg-des')}>
                            <p className={cx('des-heading')}> {item.heading}</p>
                            <p className={cx('des-text')}>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
