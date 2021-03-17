import FruitImages from './FruitImages'
import { useState } from 'react';
import { useCookies } from 'react-cookie'


function Fruitbowl() {
  const [userCookie, setUserCookie] = useCookies(["user"])
  

  const handleUserCookie = () => {
    setUserCookie("user", "currentUser", {
      path: "/",
      maxAge: 2147483647,
      expires: new Date('2032-12-31')
    })
    console.log(userCookie)
  }

  handleUserCookie()
   
  return (
    <div className="home-page">
      <header className='App-header'>fruitbowl</header>
      <div className="fruitsnbowl">
        <FruitImages />
      </div>
    </div>
  );
}
export default Fruitbowl;