//! Allez sur <App2>, CECI EST UNE ANCIENNE VERSION (utilisation des balises <Route>)

import './App.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { useState } from 'react';

import Accueil from './components/Accueil/Accueil';
import About from './components/About/About';
import Liste from './components/Liste/Liste';
import ElementListe from './components/ElementListe/ElementListe';
import ImbricationTest from './components/ImbricationTest/ImbricationTest';
import Child1 from './components/ImbricationTest/Child1/Child1';
import Child2 from './components/ImbricationTest/Child2/Child2';
import ErrorPage from './ErrorPage';
import Connexion from './components/Connexion/Connexion';
import MyAccount from './components/MyAccount/MyAccount';
import Edit from './components/Edit/Edit';


function App() {

  const [nameVal, setNameVal] = useState("");
  const [emailVal, setEmailVal] = useState("");


  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Accueil />} />
      <Route path='/about' element={<About />} />
      <Route path='/liste' element={<Liste />} />
      <Route path='/liste/:id' element={<ElementListe />} />

      <Route path='/test' element={<ImbricationTest />}>
        <Route path='/test/services' element={<Child1 />} />
        <Route path='/test/contacts' element={<Child2 />} />
      </Route>

      <Route path='/connexion' element={<Connexion nameVal={nameVal} setNameVal={setNameVal} emailVal={emailVal} setEmailVal={setEmailVal} />} />
      <Route path='/my-account' element={<MyAccount nameVal={nameVal} emailVal={emailVal} />} />
      <Route path='/my-account/edit' element={<Edit nameVal={nameVal} setNameVal={setNameVal} emailVal={emailVal} setEmailVal={setEmailVal} />} />

      <Route path='*' element={<ErrorPage />} />
    </Route>
  ))
  

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;



//!Chemins Dynamiques :
//TODO --> path='/liste/:id' OU path='/liste/:blabla'
//TODO --> path='/liste/*' -> moins restrictif, peut continuer sur plsrs slash (/liste/element/caracteristiques/nom/etc.)
























// const router = createBrowserRouter(createRoutesFromElements(
//   <Route>
//         <Route path='/' element={<Accueil />} errorElement={<ErrorPage />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/liste' element={<Liste />} />
//         <Route path='/liste/:id' element={<ElementListe />} />

//         <Route path='/test' element={<ImbricationTest />}>
//             <Route path='/test/services' element={<Child1 />} />
//             <Route path='/test/contacts' element={<Child2 />} />
//         </Route>

//         <Route path='*' element={<ErrorPage />} />
//     </Route>
// ))



// Dans le return :
{/* <RouterProvider router={router} /> */ }
