import'.//App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Acceuil from'./pages/Acceuil';

import Apropos from './pages/Apropos';





function App() {
return (
 <BrowserRouter>
 <Routes>
 <Route path='/' element={<Acceuil/>}/>

<Route path='/Apropos' element={<Apropos/>}/>





 </Routes>
 </BrowserRouter> 


);
}
export default App;


