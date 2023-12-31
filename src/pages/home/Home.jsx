import './home.scss';
import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Widget from '../../components/widgets/Widget';
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Table from '../../components/table/Table';

const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className='homeContainer'>
        <Navbar/>
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
          <Featured/>
          <Chart/>  
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transaction</div>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default Home