"use client";
import Youtube from "react-youtube";

type Props = {
  youtubeID: string;
};

const VideoPlayer = ({ youtubeID }: Props) => {
  const optionPC = {
    width: "850",
    height: "500",
  };
  
  const optionHP = {
    width: "330",
    height: "220",
  };

  return (
    <>
      <Youtube className="hidden lg:block" videoId={youtubeID} onReady={(event) => event.target.pauseVideo()} opts={optionPC} />
      <Youtube className="block lg:hidden" videoId={youtubeID} onReady={(event) => event.target.pauseVideo()} opts={optionHP} />
    </>
  );
};

export default VideoPlayer;
