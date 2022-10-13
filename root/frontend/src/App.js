import Navbar from './components/Navbar';
import Form from './components/Form';
import useGlobalContext from './hooks/useGlobalContext';
import Spinner from './components/Spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const {region} = useGlobalContext()

    return (
      <>
        <Navbar/>
        {/* form will only load when data is received and in the interim, spinner will be shown*/}
        {region && <Form/>}
        {!region && <Spinner/>}
        <ToastContainer/>
      </>
    );
}


export default App;
