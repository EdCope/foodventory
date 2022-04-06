import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h4>
            Pantrypal
          </h4>
          <h5>
            Powered by us, made by you!
          </h5>
          <Link to="/">Home</Link>
          <br/>
          <Link to="/signup">Sign Up</Link>
        </div>
      </header>
      <Outlet />
    </div>
  )
}
