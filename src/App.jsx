import useNotification from "./hooks/use-notification";

function App() {

const {NotificationComponent, triggerNotification } = useNotification("top-right");

  return (
    <>

     <button 
     onClick={triggerNotification({
      type: "success",
      message: "File Sent Successfully",
      duration: 3000
     })}>
     Trigger success
     </button>

     <NotificationComponent message={"hello tworld"} />
    </>
  )
}

export default App
