import useNotification from "./hooks/use-notification";

function App() {
  const { NotificationComponent, triggerNotification } =
    useNotification("bottom-right");

  return (
    <>
      <button
        onClick={() =>
          triggerNotification({
            type: "success",
            message: "File Sent Successfully",
            duration: 3000,
          })
        }
      >
        Trigger success
      </button>

      <button
        onClick={() =>
          triggerNotification({
            type: "error",
            message: "File Sent Failed",
            duration: 3000,
          })
        }
      >
        Trigger failed
      </button>

      {NotificationComponent}
    </>
  );
}

export default App;
