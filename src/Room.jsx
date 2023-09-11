import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { v4 as uuidv4 } from "uuid";

const Room = () => {
  const { id } = useParams();
  const secretServerId = import.meta.env.VITE_ZegoCloud_SecretServer;

  const myMeeting = async (element) => {
    const appID = 1890126180;
    const serverSecret = secretServerId;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      id,
      uuidv4().toString(),
      "Your Name"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy Url",
          url: `http://localhost:5173/room/${id}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: true,
      showRoomTimer: true,
    });
  };

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
};

export default Room;
