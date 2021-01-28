import React from 'react'

/**
* @author
* @function MenuListItem
**/

const MenuListItem = ({item}) => {
    
  return(
  
<li id="Globalnav.My_Exchange" className="feds-navList-item">
<a id="gnav_35" href="https://exchange.adobe.com/my-exchange.html" className="feds-navLink" data-feds-action="none" data-feds-personalization="{&quot;personalizedData&quot;:[{&quot;platforms&quot;:{&quot;scripts&quot;:[]},&quot;user-data&quot;:{&quot;scripts&quot;:[{&quot;jsToEvaluate&quot;:&quot;feds.data.isLoggedIn&quot;,&quot;jsComparison&quot;:&quot;===&quot;,&quot;jsValue&quot;:&quot;false&quot;,&quot;jsTimeout&quot;:&quot;10000&quot;}]},&quot;variation&quot;:{&quot;hide&quot;:true}}]}" data-feds-element="link" daa-ll="My_Exchange-4" hidden={true}>
  <span className="feds-navLink-contentWrapper">
    <span className="feds-navLink-content">
      <span className="feds-navLink-text">{item}</span>
    </span>
  </span>
</a>
</li>

   )

 }

export default MenuListItem