import React, { useState } from 'react'
import './Dashboard.css';
import Sidebar from '../components/sidebar/Sidebar';

function Dashboard() {

  const [open, setOpen] = useState(false)

  return (
    <div>
      <Sidebar open={open} setOpen={setOpen} />
    </div>
  )
}

export default Dashboard