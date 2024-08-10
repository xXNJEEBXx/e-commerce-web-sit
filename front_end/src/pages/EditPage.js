import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function EditPage(props) {
  return (
    <div className="flex justify-content-center align-items-center ">
      <div style={{ height: "600px" }}>
        <h1 style={{ fontSize: "60px", color: "blue" }}>Edit page</h1>
        <div >
          <Link to="/Add_new_product" >
            <h1 style={{ color: "blue" }} className="hover-color-red">Add new product</h1>
          </Link>
        </div>
        <div>
          <Link to="/Products_edit_select" >
            <h1 style={{ color: "blue" }} className="hover-color-red">edit product</h1>
          </Link>
        </div>
      </div>
    </div>
  )
}
















