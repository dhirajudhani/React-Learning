import React from "react";
import { CDN_URL } from "../utils/constant";

const ItemList = (props) => {
  const { items } = props;
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2 border-b-2 text-left flex justify-between">
            
            <div className="py-3">
                <div>
                    <span>{item.card.info.name}</span>
                    <span> - ₹ {item.card.info.defaultPrice ? item.card.info.defaultPrice/100 : item.card.info.price/100}</span>
                </div>
                <div className="py-2">
                    <p className="text-xs">
                        {item.card.info.description}
                    </p>
                </div>
            </div>
            <img src={CDN_URL+item.card.info.imageId } alt=""  className="w-20 h-20 rounded-lg  "/>
            
        </div>
      ))}
    </div>
  );
};

export default ItemList;
