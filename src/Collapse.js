import React, { useState, useEffect } from 'react';

function Collapsible({ title, children }) {
    const [collapsed, setCollapsed] = useState(true);
  
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
  
    return (
      <div>
        <button onClick={toggleCollapsed}>{title}</button>
        {!collapsed && children}
      </div>
    );
  }

  export default Collapsible