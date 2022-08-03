import { useState, useEffect } from 'react';
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


const App = () => {
  console.log('render')
  const [searchField,setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredList, setFilteredList] = useState(monsters)


  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then( (users) => setMonsters(users))

  }, [])

  useEffect(()=> {
    const newFilteredMonsters = monsters.filter(el => el.name.toLowerCase().includes(searchField))
    setFilteredList(newFilteredMonsters)

  }, [monsters, searchField])



  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
    }

  return (
    <div className="App">

      <div className='top-heading'>
      <h1 >Monsters Rodolex</h1>
      {/* <p>React project from <i>'Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)
      '</i></p> */}
      </div>

      <SearchBox className='monsters-search-box' 
      placeholder='search monsters' 
      onChangeHandler= {onSearchChange}>
        
      </SearchBox>

     <CardList monsters= {filteredList}></CardList> 
      

    </div>
    
  );
}

// class App extends Component {

//   constructor (){
//     console.log('constructor')

//     super();

//     this.state= {
//       monsters:[],
//       searchInput: '',
//     }
//   }

//   //lifecycle method
//   componentDidMount(){
//     console.log('componentdidmount')
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then( (users) => 
//         this.setState(
//           () => {
//           return {monsters: users}
//           },
//           () => {
//           console.log(this.state)
//           }
//         )  
//       )



//   }

// onSearchEvent = (event) => {
//   console.log(event.target.value)

//   //updating de state
//   this.setState(() => {
//     return {searchInput: event.target.value}
//   })
// }


//   render(){
//     console.log('render')

//     const {monsters, searchInput} = this.state
//     const {onSearchEvent}= this

//     const filterNames = monsters.filter(el => el.name.toLowerCase().includes(searchInput.toLowerCase()))
//     console.log(filterNames)

    

//     return (
//       <div className="App">

//         <div className='top-heading'>
//         <h1 >Monsters Rodolex</h1>
//         <p>React project from <i>'Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)
// '</i></p>
//         </div>

//         <SearchBox className='monsters-search-box' 
//         placeholder='search monsters' 
//         onChangeHandler= {onSearchEvent}>
          
//         </SearchBox>

//         <CardList monsters= {filterNames}></CardList>
        

//       </div>
      
//     );



//   }
// }

export default App;
