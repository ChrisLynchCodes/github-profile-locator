import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Layout/Navbar";
import {Footer} from './Components/Layout/Footer'
import { HomePage } from "./Routes/HomePage";
import { AboutPage } from "./Routes/AboutPage";
import { NotFoundPage } from "./Routes/NotFoundPage";
import {GithubProvider} from "./Context/Github/GithubContext"
import {AlertProvider} from "./Context/Alert/AlertContext"
import { Alert } from "./Components/Layout/Alert";
import { User } from "./Routes/User";
function App() {
  return (

    <>
    <GithubProvider>
      <AlertProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />

          <main className="container mx-auto px-3 pb-12">
            <Alert/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path='/user/:login' element={<User />} />
            <Route path="/notfound" element={<NotFoundPage/>}/>
            <Route path="/*" element={<NotFoundPage/>}/>
            </Routes>
          </main>
         <Footer />
         
        </div>
      </Router>
      </AlertProvider>
      </GithubProvider>
    </>


  );
}

export default App;
