import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <>
      <div>Header</div>
      {/* <div className="text-3xl font-bold underline text-[pink]">Hello world!</div> */}

      <br />
      <Link href={'/about'}> To About Page</Link>
    </>
  )
}

export default index
