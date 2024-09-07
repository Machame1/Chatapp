import Chatss from "./componenets/chats/Chatss";
import Details from "./componenets/details/Details";
import Lists_ from "./componenets/list/Lists_";
import Ogin from "./componenets/Login/Ogin";
import Noti from "./componenets/notifi/Noti";
function App(){
   const user=true;
    return(
        <div className="container">
        {user?(
            <>
            <Lists_/>
            <Chatss/>
            <Details/>
            </>
        ):(<Ogin/>)} 
        <Noti/>   
        </div>
    )
}
export default App;