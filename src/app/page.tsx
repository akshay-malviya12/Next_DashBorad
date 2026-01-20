import Image from "next/image";
import styles from "./page.module.css";
import  "../styles/globals.module.css"
// pages/index.js
import TopNavbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Dashboard from '../components/dashboard';

export default function Home() {
  return (
    <>
      <TopNavbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Dashboard />
        </div>
      </div>
    </>
  );
}
