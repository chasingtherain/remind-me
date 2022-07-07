import Navbar from './components/Navbar';
import Form from './components/Form';
import useGlobalContext from './hooks/useGlobalContext';

function App() {
    const {region, setRegion} = useGlobalContext()


    return (
      <>
        <Navbar/>
        {/* form will only load when data is received */}
        {region && <Form region={region} setRegion={setRegion}/>}
      </>
    );
}


export default App;
