import React, { useEffect, useState } from "react";
import './menu_items.css';
import Menu from "../menu.json";

const MenuItem = (props)=>{
    const [quantity,changequantity] = useState(0);
    useState(()=>{props.item.quantity=quantity;
        console.log("props is "+props.item.id)});
        Menu[props.item.id].quantity=quantity;
    return(
<div className="card">
    <img src={props.item.image}></img>
    <div className="details">
        <h5>{props.item.name}</h5>
        <p>{props.item.description}</p>
        <div className="horizontal">
            <h4>₹{props.item.cost}</h4>
            <div className="quantity_changer">
            <button onClick={()=>{if(quantity>=1){changequantity(quantity -1);console.log("decremented");}}}><i>-</i></button>  
            <h4>{quantity}</h4>
            <button onClick={()=>{console.log("incremented");changequantity(quantity +1);}}><i>+</i></button>
            </div>
        </div>
        </div>
</div>
    )
}
export default MenuItem;







//------------------------------trail----------------------
{/* <div className="ui unstackable items">
  <div class="item">
    <div class="image" >
    <div class="ui blue ribbon label" >
        <i class=" icon"></i> {props.item.discount}%
      </div>
    <img  src={props.item.image}></img>
    </div>
    <div class="content">
  
      <h1 >{props.item.name}</h1>
      <div class="meta">
        <span>{props.item.description}</span>
      </div>
      <div class="description">
        <p>₹{props.item.cost}</p>
      </div>
      <div class="extra">
      <button class="circular ui icon blue button" >
        <i class="minus  icon"></i>
      </button>
      <button class="ui icon button">
          {props.item.quantity}
      </button>
      <button class="circular ui icon blue button">
        <i class="plus icon"></i>
      </button>
      </div>
    </div>
  </div>
  <div class="ui divider"></div>
</div> */}