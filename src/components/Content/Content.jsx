import {Route, Routes} from "react-router-dom";
import Favorites from "../Cats/Favorites/Favorites";
import AllContainer from "../Cats/All/AllContainer";
import Preloader from "../Preloader/Preloader";

const Content = () => {
    return (
        <Routes>
            <Route path="/react-gh-pages/*" element={<>
                <AllContainer/>
                <Preloader/>
            </>}/>
            <Route path="/react-gh-pages/favorites" element={<Favorites/>}/>
        </Routes>
    );
}

export default Content;
