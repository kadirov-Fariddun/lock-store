import React,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
// components
import Filter from '../filter/Filter';
import PathHistory from '../path-history/PathHistory.jsx';
import Card from '../card/Card.jsx';
import Pagination from '../pagination/Pagination.jsx';
import db from '../../db/db.js';
import Popular from '../popular-see/Popular.jsx';
import JustLooked from '../justLooked/JustLooked.jsx';
import Ceo from '../ceo/Ceo.jsx';

export default function Catalog() {
 

  return (
    <>
    <div className="catalog">
      <div className="container">
        <div className="container-history">
          <PathHistory path={[{
            path:'Каталог',
            last:true
          }]}/>
        </div>
        <div className="catalog-title">Накладные электронные замки <span>({JSON.parse(db).length})</span>
        </div>
        <div className="catalog-flex">
          <Filter />
          {/* pagination data */}
          <Pagination
          db={db}
          />
        </div>
        <JustLooked />
      </div>
      {/* ceo */}
      <Ceo 
      ceoList={true}
      image={1}
      />
      <Ceo 
      ceoList={false}
      image={2}
      class='ceo-flex-rev'
      />
      {/* ceo end */}
    </div>
    </>
  )
}
