import { useEffect } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { toast } from "react-toastify";

// 서버 설정에 맞춰 URL을 수정하세요.
const backendHost = "172.16.111.45"; 

const socketUrl = `http://${backendHost}:8003/workly/ws-stomp`;

const ChatNotificationManager = ({ userNo }) => {
  useEffect(() => {
    const sock = new SockJS(socketUrl);
    const client = new Client({
      webSocketFactory: () => sock,
      reconnectDelay: 5000,
      connectHeaders: { userNo: userNo.toString() },
      onConnect: () => {
        // 전역 알림 채널 구독
        client.subscribe('/user/queue/notifications', (message) => {
          const notification = JSON.parse(message.body);
          const chatRoomNo = notification.chatRoomNo; // 백엔드에서 전달한 채팅방 번호
          toast.info(`채팅 알림 (방 ${chatRoomNo}): ${notification.message}`, {
            position: "top-center",
            autoClose: 3000,
          });
        });
      },
      onStompError: (frame) => {
        console.error("STOMP 에러:", frame);
      },
    });
    client.activate();
    return () => {
      client.deactivate();
    };
  }, [userNo]);

  return null;
};

export default ChatNotificationManager;
