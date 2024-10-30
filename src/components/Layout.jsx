import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
export default function Layout() {
  return (
    <div id="wrapper">
      <Header />
      <main className="container">
        <Outlet /> {/* Renders the nested route component */}
      </main>
      <Footer />
    </div>
  );
}