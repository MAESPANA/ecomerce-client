import React from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import '@picocss/pico'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
    <nav>
    <ul>
      <li><a  className="secondary"><KeyboardArrowDownIcon/> <img src="/img/en.png" alt="" /></a></li>
      <li><a  className="secondary"><KeyboardArrowDownIcon/> USD </a></li>
      <li><Link to='/'>Women</Link></li>
      <li><Link to='/'>Men</Link></li>
      <li><Link to='/'>Children</Link></li>


    </ul>
    <ul>
      <li><strong>Shopping</strong></li>
    </ul>
    <ul>
      <li > <Link to='/'>HomePage</Link> </li>
      <li> <Link to='/'>About</Link></li>
      <li><Link to='/'>Contact</Link></li>
      <li> <Link to='/'>Stores</Link></li>
      <li><a href="#" className="secondary"><SearchIcon/></a></li>
      <li><a href="#" className="secondary"><PersonOutlineOutlinedIcon/></a></li>
      <li><a href="#" className="secondary"><FavoriteBorderOutlinedIcon/></a></li>
      <li><a href="#" className="secondary"><ShoppingCartOutlinedIcon/></a><span>0</span> </li>
    </ul>
  </nav>
  
  
  )
}

export default Navbar