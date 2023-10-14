import Image from 'next/image';
import React, { FC } from 'react';

interface VideoWidgetProps {
  videoLink: string;
  imageLink: string;
  handleLoadedData: () => void;
  handleLoadStart: () => void;
  handleError: () => void;
  isLoading: boolean;
}

const VideoWidget: FC<VideoWidgetProps> = ({
  videoLink,
  imageLink,
  handleLoadedData,
  handleLoadStart,
  handleError,
  isLoading,
}) => {
  return videoLink ? (
    <video
      width="330"
      controls
      muted
      autoPlay
      onLoadedData={handleLoadedData}
      onLoadStart={handleLoadStart}
      onError={handleError}
      className={`${isLoading ? 'loaded' : ''}`}
    >
      <source src={videoLink} type="video/mp4" />
      Your browser does not support the video.
    </video>
  ) : (
    <Image
      width="330"
      height="400"
      src={imageLink}
      alt={'image'}
      onLoad={handleLoadedData}
      onError={handleError}
    />
  );
};

export default VideoWidget;
