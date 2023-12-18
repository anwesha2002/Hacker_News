import './App.css'
import {Home} from "./UI/Pages/Home.tsx";
import {DataProvider} from "./UI/Context/DataProvider.tsx";
import {Route, Routes} from "react-router-dom";
import {PostDetail} from "./UI/Pages/postDetail.tsx";
import {DetailProvider} from "./UI/Context/NewsDetailProvider.tsx";

function App() {

  return (
    <DataProvider>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/:story_id" element={
                <DetailProvider>
                    <PostDetail/>
                </DetailProvider>
            }/>
        </Routes>
    </DataProvider>
  )
}

export default App
