import { BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import ClassForm from "./Components/ClassForm/ClassForm";


function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App /> }></Route>
                <Route path="/product/:id" element={ <ClassForm /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;