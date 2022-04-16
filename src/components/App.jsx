import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Canvas from "./Canvas/Canvas";
import Collab from "../Pages/Collab/collab";
import NotFound from "../Pages/NotFound/Notfound";
import Contact from "../Pages/Conatct/contact";
import Askque from "../Pages/Askque/Askque";

function App() {
    

    return <React.Fragment>

        <NavBar />

        <Routes>

            <Route path="/" element={<Canvas />} />
            <Route path="/collab" element={<Collab />} />
            <Route path="/resources" element={<NotFound />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/askque" element={<Askque />} />

        </Routes>
        
        
        

    </React.Fragment>;
}

export default App;