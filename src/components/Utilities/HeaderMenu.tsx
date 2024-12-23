import React from 'react'

type Props = {
    title: string
}

const HeaderMenu = ({title}: Props) => {
  return (
    <div>
        <div className=''>
            <h3 className='font-semibold text-2xl'>{title}</h3>
        </div>
    </div>
  )
}

export default HeaderMenu