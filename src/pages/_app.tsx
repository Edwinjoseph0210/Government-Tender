import React from 'react';
import '../styles/globals.css';
import Navbar from '../components/common/Navbar';
// import type { AppProps } from 'next/app'; // Will resolve after installing dependencies

type AppProps = any;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
} 