import React from 'react';

const NavMenuItem = ({text, action}) => <div className="menu-item" onClick={ action }> {text} </div>

export default NavMenuItem;