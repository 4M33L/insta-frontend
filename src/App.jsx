import {Link} from "react-router-dom";

function App() {

  return (
    <>
      <div className={"h-screen w-screen flex justify-center items-center"}>
        <Link to={"/login"} className={"h-10 w-20 border-2 rounded-xl border-black flex justify-center items-center"}>Login</Link>
      </div>
    </>
  )
}

export default App
