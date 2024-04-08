import React from "react";
import { CDN_URL } from "../utils/constant";
import {useDispatch} from "react-redux"
import { addItems } from "../utils/cartSlice";

const ItemList = (props) => {
  const { items } = props;
  console.log(items);

   const dispatch = useDispatch()

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItems(item))
  }

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="p-6 m-4 border-b-2 text-left flex justify-between">
            
            <div className="py-3 w-9/12">
                <div>
                    <span className="font-bold text-lg">{item.card.info.name}</span>
                    <span className="font-bold"> - ₹ {item.card.info.defaultPrice ? item.card.info.defaultPrice/100 : item.card.info.price/100}</span>
                </div>
                <div className="py-2">
                    <p className="text-xs">
                        {item.card.info.description}
                    </p>
                </div>
            </div>
            <div className="w-3/12">
              <div className="absolute my-24 mx-10">
                <button onClick={() => handleAddItem(item)} className="p-2 bg-white shadow-xl m-auto font-bold text-lg text-green-600 rounded-lg w-20">ADD</button>
              </div>
              <img src={CDN_URL+item.card.info.imageId } alt=""  className="w-40 h-32 rounded-xl bg-cover"/>
            </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
