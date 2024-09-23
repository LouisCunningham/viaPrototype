import 'alpinejs';
import React, { useState, useEffect } from 'react';
import MainLayout from './Layouts/MainLayout';
import { createHashRouter, createRoutesFromElements, Route, RouterProvider, useNavigation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ConsultPage from './pages/ConsultPage';
import TrainingPage from './pages/TrainingPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';



const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage/>} />
      <Route path='/consulting' element={<ConsultPage />} />
      <Route path='/training' element={<TrainingPage />} />
      <Route path='/faq' element={<FaqPage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App;
