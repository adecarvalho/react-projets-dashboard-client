import React from "react"
// import NavBar from "./components/layout/NavBar"
import NavBar from "./components/layout/NavigationBar"
import Routes from "./routes/Routes"
import Footer from "./components/layout/Footer"

import UserProvider from "./contexts/userContext"
import SujetsProvider from "./contexts/sujetsContext"
import PostsProvider from "./contexts/postsContext"

function App() {
  return (
    <>
      <PostsProvider>
        <SujetsProvider>
          <UserProvider>
            {/*  */}
            <NavBar />
            <section className="main">
              <Routes />
            </section>
            <Footer />
            {/** */}
          </UserProvider>
        </SujetsProvider>
      </PostsProvider>
    </>
  )
}

export default App
