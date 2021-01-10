import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../actions/category.action';
import './style.css'
/**
* @author
* @function MenueHeader
**/

const MenueHeader = (props) => {

  const category = useSelector(state=> state.category)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch( getAllCategory() )
  },[]);

 //Display categories
 const renderCategories = (categories) => {
  const myCategories = [];
  for (let category of categories) {
    myCategories.push(
      <li key={category.name} >
        {
          category.parentId ? <a href={category.slug}>{category.name}</a> : <span> {category.name} </span>
        }
        {/* its a recursive call to show children of categories */}
        {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
      </li>
    );
  }
  return myCategories;
};

  return(
    <div className="menueHeader" >
      <ul>
      { category.categories.length > 0 ? renderCategories(category.categories) : null }
      </ul>
    </div>
   )
  }


export default MenueHeader