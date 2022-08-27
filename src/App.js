import'./App.css';
import ContactMe from './components/ContactMe';
function App(){
    return (
       <div className="App">
        <header className="App-header">
            <p>Welcome to my website</p>
            <h2> Hi I Am Ishmael</h2>
        <h2> Hi I Am living in the USA</h2>
       
            <h5> I am Software Developer</h5>
            <hr/>
            <ContactMe/>
        </header>
       </div>
    )
}
export default App;
