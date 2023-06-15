"use client"
import React from "react";
import {SeachMenuFeature} from "./";
import { useState } from "react";




const SearchBar = () => {
  const [menufeature, setMenuFeature] =  useState('')
  const handleSeach=() => {

  }

  return(
    <form className="searchbar" onSubmit={handleSeach}>
      <div className="searchbar__item">
        <SeachMenuFeature 
          menufeature ={menufeature}
          setMenuFeature = {setMenuFeature}
        />
      </div>
    </form>
  );
}

export default SearchBar;
