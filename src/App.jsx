import { useEffect,useState } from 'react';
import Footer from './Footer/Footer.jsx'
import Header from './Header/Header.jsx';
import About from './About/About.jsx'
import ShopCard from './ICard/ICard.jsx'
import ShopingData from './ShoppingList.jsx'

function App() {
const [shop,setShop] = useState([])


//
useEffect(() => {
  setShop(ShopingData)
 /*
$('.heart').on('click',function (e){
  if(e.target.textContent =='❤️'){
    e.target.textContent='🤍';
  }
  else{
    e.target.textContent ='❤️';
  }
  console.log('red clicked')
})
*/
},[])

//{ shop.map((sopp,ind) => <ShopCard item={sopp} key={ind}/>)}
//console.log($('.hideHear').text())
  return (
    <div className="wrapper">
        <div className="wrapper-colom2">
          <Header />
          <p >CLICK ON IT</p>
          <div className="shopinCards">
            
             { shop.map((sop,w) => <ShopCard  item={sop} key={w}/>)}
            
           
          </div>
            <About />
          <Footer />
          <a href="#foot" id='topbtn'>&darr;</a>
          <a href="#" id='bottombtn'>&uarr;</a>
        </div>
    </div>
  )
}

export default App
