import style from './Header.module.css'
import { useEffect, useState } from 'react';
import shoppingItems from '../ShoppingList';

function Header(){
  const [searchTerm,setSearchTerm] = useState('')

    function searchItem(term){
      $(".shopinCards").show();
      $(".shopinCards *").show();
      $('.hideHear').show();

               var value= term.toLowerCase();
               $(".Card-Container").not(function(){
               $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1)
      });
      $('.RankCards').hide();
      $('#abot').hide();
      $('.ProfesionCards').hide();
      $('.hideHear').hide();

      //console.log($('.hideHear').text())

     };


  function homeClick(){
    $(".shopinCards").show();
    $(".shopinCards *").show();
    $('#abot').hide();
    $('.ProfesionCards').hide();
    $('.RankCards').hide();
  }
  
  function AboutClick(){
    $('#abot').show();
    $(".shopinCards").hide();
    $('.ProfesionCards').hide();
    $('.RankCards').hide();
  }

  function handleChange(e){
    setSearchTerm(e.target.value)
  }
useEffect(()=>{
  //setSearchTerm(searchTerm)
  searchItem(searchTerm)
},[])
    return(
        <header>
             <div className={style.ho}>
          <div className={style.hoo}>
            <h3>ARSHI</h3>
          </div>
          <div className={style.hot}>
            <ul>
              <li className={style.litem} onClick={() => homeClick()}><a href="#" className={style.navact}>Home</a></li>
              <li className={style.litemi} id="roleSelect">
                <a href="#">Products&#129171;</a>
                <ul className={style.Dropdownlist}>
                  <li onClick={() => searchItem('T-Shirt')}>T-Shirts</li>
                  <li onClick={() => searchItem('Shirt')}>Shirts</li>
                  <li onClick={() => searchItem('Jeans')}>Jeans</li>
                  <li onClick={() => searchItem('Pant')}>Pants</li>
                  <li onClick={() => searchItem('Trousers Pants')}>Trousers</li>
                  <li onClick={() => searchItem('Perfumes')}>Perfumes</li>
                  <li onClick={() => searchItem('Backpack')}>Bags</li>
                  <li onClick={() => searchItem('Shoes')}>Shoes</li>
                  <li onClick={() => searchItem('Mobile')}>Mobiles</li>
                  <li onClick={() => searchItem('Iphone')}>IPhones</li>
                  <li onClick={() => searchItem('Watch')}>Watches</li>
                </ul>
                </li>
              <li className={style.litemRank}>
                <a href="#">Categories&#129171;</a>
                <ul id="roleSelect" className={style.roleSelect}>
                  <li onClick={() => searchItem('Clothing')}>Clothing</li>
                  <li onClick={() => searchItem('Footwear')}>Footwear</li>
                  <li onClick={() => searchItem('Sports & Fiteness')}>Sports &<br />Fiteness</li>
                  <li onClick={() => searchItem('Accessories')}>Accessories</li>
                  <li onClick={() => searchItem('Grooming & Perfumes')}>Grooming & Perfumes</li>
                  <li onClick={() => searchItem('Mobiles')}>Mobiles</li>
                  <li onClick={() => searchItem('Watches')}>Watches</li>
                </ul>
                </li>
              <li className={style.litem} onClick={() => AboutClick()}><a href="#">About</a></li>
            </ul>
          </div>
        </div>
        <div className="search">
          <div>
            <input type="text" name="" id="SearchItems" 
            placeholder='Search for items' 
            
            onChange={(e) => handleChange(e)} />
          <img src="./src/assets/search.png" alt="Search" onClick={()=>searchItem(searchTerm)}/>
          </div>
          <p className="likelist" onClick={() => searchItem('🩷')}>LIKED❤️</p>
           </div>
        </header>
    );
}

export default Header