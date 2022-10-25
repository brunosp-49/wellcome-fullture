import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "../pages/index/Index";
import Second from "../pages/second/Second";


export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Index/>}/>
                <Route path="/next/:name" element={<Second/>}/>
            </Routes>
        </BrowserRouter>
    )
}