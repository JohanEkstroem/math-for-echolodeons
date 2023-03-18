import './App.css';
import Calculate from './components/Calculate';
import Option from './components/Option'
import WrongAnswer from './components/WrongAnswer'; 
function App() {
    return (
        <>
            {/* <div className='container-fluid p-5 my-5 border bg-dark text-white  rounded'> */}
                <Option />
                <Calculate />
                <WrongAnswer />
            {/* </div> */}
        </>
    );
}

export default App;
