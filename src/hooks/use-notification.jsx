import { useState } from "react";
import Notification from "../components/notification";

const useNotification = (position = "bottom-right") => {
  const [notification, setNotification] = useState(null);

  const triggerNotification = (notificationProps) => {
    setNotification(notificationProps);

    setTimeout(() => {
      setNotification[null];
    }, notification?.duration);
  };

  const NotificationComponent = notification ? (
    <div>
      <Notification {...notification} />
    </div>
  ) : null;

  return { NotificationComponent, triggerNotification };
};

export default useNotification;
