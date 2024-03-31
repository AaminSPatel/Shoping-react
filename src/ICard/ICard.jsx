import React,{useState,useEffect} from 'react';
//import style from './ShopCard.module.css'
//import TeamData from '../TeamCard/TeamCardData';
//import Employee from '../Employee.jsx';
function ShopCard({item}){
   const [isAdded,setIsAdded] = useState('');
   const [like,setLike] = useState('')
    const [colorLike,setColorLike] = useState('')
   useEffect(() =>{
    setIsAdded('No')
   setLike('🤍');
    setColorLike('white');
     
   },[])
   
    return(
        <div className="Card-Container">
            <div className="card-img">
                    <p className='heart' onClick={() =>{
                       colorLike=='red' ? (setLike('🤍'), setColorLike('white')):
                       (setLike('🩷'), setColorLike('red'))
                       
                    }}>{like}<i className="hideHear">{colorLike}</i></p>
                    
                    <img src={item.image} alt={`${item.name} image`} />
            </div>
            <div className="card-2">
                <p className="brandName">{item.brand}</p>
                <p className="productName">{item.name}</p>
                <p className="category">{item.category}</p>
                <span className='pricegrp'>
                  <p className="price" >Rs<b>{item.price}</b></p>
                  <p className="price2">{item.price}</p>
                  <i className="shopCart" onClick={()=>{
                    isAdded=='No'? setIsAdded('Yes') : setIsAdded('No')
                  }}>&#9733;<span className="CartNone">{isAdded}</span></i>
                </span>
            </div>
        </div>
    )
}

export default ShopCard