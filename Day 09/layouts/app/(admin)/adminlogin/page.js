import React from 'react'

const login = () => {
  return (
    <div>
      Login page
    </div>
  )
}

export default login

//Dynamic metadata
export async function generateMetadata({ params }) {
  return {
    title: 'MetaAdmin : Facebook metadata',
  }
}