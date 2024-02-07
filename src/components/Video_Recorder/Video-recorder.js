import React, { useState, useRef } from "react";

const VideoRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState(null);
  const videoRef = useRef(null);
  const recordedVideoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const startRecording = () => {
    setIsRecording(true);
    chunksRef.current = [];
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        mediaRecorderRef.current = new MediaRecorder(stream, {
          mimeType: "video/webm",
        });

        mediaRecorderRef.current.ondataavailable = (e) => {
          if (e.data && e.data.size > 0) {
            chunksRef.current.push(e.data);
          }
        };

        mediaRecorderRef.current.onstop = () => {
          const blob = new Blob(chunksRef.current, { type: "video/webm" });
          setRecordedBlob(blob);
          const url = URL.createObjectURL(blob);
          recordedVideoRef.current.src = url;
          setIsRecording(false);
        };

        mediaRecorderRef.current.start();
      })
      .catch((err) => {
        console.error("Error accessing media devices:", err);
      });
  };

  const stopRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      mediaRecorderRef.current.stop();
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null; // Set srcObject to null after stopping recording
    }
  };

  const toggleAudio = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const audioTracks = videoRef.current.srcObject.getAudioTracks();
      audioTracks.forEach((track) => {
        track.enabled = !isAudioMuted;
      });
      setIsAudioMuted(!isAudioMuted);
    }
  };

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline muted={isAudioMuted} />
      {!isRecording ? (
        <button onClick={startRecording}>Start Recording</button>
      ) : (
        <button onClick={stopRecording}>Stop Recording</button>
      )}
      <button onClick={toggleAudio}>
        {isAudioMuted ? "Unmute Audio" : "Mute Audio"}
      </button>
      {recordedBlob && (
        <div>
          <h2>Recorded Video Preview</h2>
          <video ref={recordedVideoRef} controls />
        </div>
      )}
    </div>
  );
};

export default VideoRecorder;
