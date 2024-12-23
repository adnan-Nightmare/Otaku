"use client";
import Youtube from "react-youtube";

type Props = {
  youtubeID: string;
};

const VideoPlayer = ({ youtubeID }: Props) => {
  const option = {
    width: "850",
    height: "500",
  };

  return (
    <>
      <Youtube videoId={youtubeID} onReady={(event) => event.target.pauseVideo()} opts={option} />
    </>
  );
};

export default VideoPlayer;
