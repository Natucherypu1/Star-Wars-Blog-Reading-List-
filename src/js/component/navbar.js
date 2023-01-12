import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
  const{store, actions}= useContext(Context)
  return (
    <nav className="navbar navbar-light bg-light mb-3 container">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">React Boilerplate</span>
      </Link>

      <div class="btn-group ml-auto">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites
        </button>
        <ul class="dropdown-menu">
          {store.favorites.map((favorite, index)=> {
            return (
              <li>
            <a class="dropdown-item" href="#">
              {favorite.name}
            </a>
            <div onClick= {()=> actions.deleteFavorites(index)}>
            <i class="fa-regular fa-trash-can"></i>
            </div>
          </li>)})}
              
          
        </ul>
      </div>
    </nav>
  );
};
