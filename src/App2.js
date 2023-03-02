import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
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


function App2() {

  const [nameVal, setNameVal] = useState("");
  const [emailVal, setEmailVal] = useState("");

  const router2 = createBrowserRouter([
    {
        path:'/',
        element: <Accueil />,
    },

    {
        path:'/about',
        element: <About />,
    },

    {
        path:'/liste',
        element: <Liste />,
    },

    {
        path:'/liste/:id',
        element: <ElementListe />,
    },

    {
        path:'/test',
        element: <ImbricationTest />,
        children: [
            {
                path:'/test/services',
                element: <Child1 />,
            },
            {
                path:'/test/services',
                element: <Child2 />,
            },
        ]
    },

    {
        path:'/connexion',
        element: <Connexion nameVal={nameVal} setNameVal={setNameVal} emailVal={emailVal} setEmailVal={setEmailVal} />,
    },

    {
        path:'/my-account',
        element: <MyAccount nameVal={nameVal} emailVal={emailVal} />,
    },

    {
        path:'/my-account/edit',
        element: <Edit nameVal={nameVal} setNameVal={setNameVal} emailVal={emailVal} setEmailVal={setEmailVal} />,
    },

    {
        path:'*',
        element: <ErrorPage />,
    },
  ])
  

  return (
    <div>
      <RouterProvider router={router2} />
    </div>
  );
}

export default App2;




//!Chemins Dynamiques :
//TODO --> path='/liste/:id' OU path='/liste/:blabla'
//TODO --> path='/liste/*' -> moins restrictif, peut continuer sur plsrs slash (/liste/element/caracteristiques/nom/etc.)