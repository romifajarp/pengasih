import React, { useState, useEffect } from 'react';
import BarLoader from "react-spinners/BarLoader";

const Loading = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <div>
      loading ?

      <div className='loading'><BarLoader
        size={150}
        color={"#36d7b7"}
        loading={loading}
      />
      </div>
      :
    </div>
  )
}

export default Loading