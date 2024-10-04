import './App.css'
import UserCard from './components/UserCard'
import images from '../src/assets/images.jpeg'

function App() {


  return (
      <div className='container'>
        <UserCard name="Maharanapratap"  desc="decs1" img={images} style={{"border-radius":"10px"}}/>
        <UserCard name=" prithviRaj Chauhan" desc="decs2" img={images}/>
        <UserCard name="Sushil Pratap" desc="decs3" img={images}/>
      </div>
  )
}

export default App
