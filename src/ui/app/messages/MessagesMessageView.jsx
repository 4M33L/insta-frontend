const MessagesMessageView = ({
  ownMessage,
}) => {
  const user = {
    name: "Igraona Igraona",
    message: "Ko te jebe?",
    imageUrl: "https://easydrawingguides.com/wp-content/uploads/2022/07/bull-head-_-face-11.png"
  }

  const dynamicClass = ownMessage ?
    "rounded-tl-none bg-blue-800" : "rounded-tr-none bg-green-800 self-end"

  return (
    <div className={`flex h-14 w-fit max-w-80 gap-2 p-2 text-white rounded-xl ${dynamicClass}`}>
      <img className={"w-10 h-10 rounded-full"} src={user.imageUrl} alt={user.name}/>
      <div className={"flex flex-col items-start flex-grow"}>
        <p className={"text-sm font-medium"}>{user.name}</p>
        <p className={"text-sm"}>{user.message}</p>
      </div>
    </div>
  )
}

export default MessagesMessageView