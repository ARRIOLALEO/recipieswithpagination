import React from 'react'
import { useContext } from 'react'
import {RecipesContext} from '../context/GeneralContex'
export default function Pagination() {
    const {howManyPages,pageNow,setPageNow} = useContext(RecipesContext)
    const hanlderPage = (value) =>{
        setPageNow(value)
    }
    const btn = new Array(howManyPages).fill('pages')
  return (
      <>
      {
          btn.map((btn,index)=>(
              <button key={btn+index} onClick={()=>hanlderPage(index)} className={index === pageNow ? 'selectedPage':null}>{index + 1}</button>
          ))
      }
      </>
  )
}
