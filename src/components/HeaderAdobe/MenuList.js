import React from 'react'
import MenuListItem from './MenuListItem';

/**
* @author
* @function MenuList
**/

const MenuList = (props) => {
    console.log(props);
    const menuItems=["Creative Cloud", "Experience Cloud" ,"Document Cloud", "My Exchange"];
    
    return(
    <ul className="feds-navList menu-items" >

{menuItems.map((item,i) =>
        <MenuListItem item={item} key={i.toString()}></MenuListItem>
      )}

   

</ul>

   )

 }

export default MenuList