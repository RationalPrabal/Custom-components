import React from 'react'

const Single = ({el,finished}) => {
    const [bg,setBg]= React.useState(false)
  return (
    <div onClick={(e)=>{
        setBg(true)
finished(e.target)
    }} style={{backgroundColor : bg ? "teal": "", height:"100px", border:"2px solid teal"}}></div>
  )
}

export default Single