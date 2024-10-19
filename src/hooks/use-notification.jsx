import { useRef, useState } from "react";
import Notification from "../components/notification";

const useNotification = (position = "bottom-right") => {
  let timerRef = useRef({ current: null });

  const [notification, setNotification] = useState(null);

  const triggerNotification = (notificationProps) => {
    if (timerRef?.current) clearInterval(timerRef?.current);

    setNotification(notificationProps);
    console.log({ notificationProps });

    timerRef.current = setTimeout(() => {
      setNotification(null);
    }, notificationProps?.duration);
  };

  const NotificationComponent = notification ? (
    <div className={`${position}`}>
      <Notification {...notification} />
    </div>
  ) : null;

  return { NotificationComponent, triggerNotification };
};

export default useNotification;
