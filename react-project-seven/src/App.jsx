
import './App.css'

function App() {

  function handleClick(){
      alert('I am clicked')
  }

    function handleInputChange(e){
      console.log(e.target.value);
      
    }

    function handleSubmit(e){
      e.preventDefault();
      // i am writing my sustom behaviour down
      console.log(e.target.value);
      
    }

    function handleMouse(){
      alert("mouse over clicked")
    }


  return (
    <div>

    <form onSubmit={handleSubmit}>
      <input type="text"  onChange={handleInputChange}/>
      <button type='submit'>
        Click me
    </button>
    </form>



      <h1 onMouseOver={handleMouse} >Hello this is React</h1>
     
    </div>
  )
}

export default App
