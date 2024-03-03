import React from 'react';
import './Party.css';

function Party({ name, status, imgLink }) {
  return (
    <div className="party-member">
        <img className="member-image" src={ imgLink }/>
        <p className="member-name"> { name } </p>
        <p className={status} id="member-status" >{ status }</p>
    </div>
  );
}

export default Party;
