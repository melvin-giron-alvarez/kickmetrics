// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Favorites, Footble, Homepage, Main, Players, Standings, Teams } from './pages';
import { onAuthStateChanged, auth } from './firebase';

const App = () => {


  const [user, setUser] = useState(null);

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, user => {
          setUser(user);
      });

      return () => unsubscribe();
  }, []);


  return (
      <Router>
        <Routes>
          <Route index element={<Main />} />
          <Route path='/homepage' element={<Homepage />} />
          <Route path='/homepage/standings' element={<Standings />} />
          <Route path='/homepage/footble' element={<Footble />} />
          <Route path='/homepage/players' element={<Players />} />
          <Route path='/homepage/teams' element={<Teams />} />
          <Route path='/homepage/favorites' element={<Favorites />} />
        </Routes>
      </Router>
  );
};

export default App;

