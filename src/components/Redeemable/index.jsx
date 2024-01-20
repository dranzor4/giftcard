import React, { memo, useState } from 'react';
import Button from '../Button';
import"./Redeemable.css"
const Redeemable = () => {
    const[online,setOnline]=useState(true);
    const[offline,setOffline]=useState(false);
  return (
    <div className="redeemable-container">
    <div className="containerHeader">Redeemable :</div>
    <Button className={online ? "online" : "offline"}>{online?<img src="/Images/check-circle-fill.svg" alt="check"/>:<img src="/Images/x-circle-fill.svg" alt="cross"/>}Online</Button>
    <Button className={offline ? "online" : "offline"}>{offline?<img src="/Images/check-circle-fill.svg" alt="check"/>:<img src="/Images/x-circle-fill.svg" alt="cross"/>}Offline</Button>
    </div>
  )
}

export default memo(Redeemable)