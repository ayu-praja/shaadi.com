
import React, { useState, useEffect, useCallback, useRef } from 'react';
import useBookSearch from './useBookSearch';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Card,CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


function Dashboard() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, books, hasMore } = useBookSearch(query, pageNumber);
  const observer = useRef();

  const lastBookElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(enteries => {
      if (enteries[0].isIntersecting && hasMore) {
        setPageNumber(prevPage => prevPage + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  const handleSearch = (e) => {
    setQuery(e.target.value)
    setPageNumber(1)
  }
console.log('dashboard')
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div className="form-group">
                    <label>Type any Text</label>
                    <input type="email" className="form-control" placeholder="Enter text" value={query} onChange={e => handleSearch(e)}/>
                </div>
      {books.length>0 &&
      <Card style={{padding:'2%'}}>
        { books.map((item, index) => {
          if (books.length === index + 1)
            return <div ref={lastBookElementRef} key={index}>
              {item}
            </div>
          else
            return <div key={index}>
              {item}
            </div>

        })}
      </Card>}
      <div style={{padding:'2%'}}>{loading && 
          <CircularProgress />
      }</div>
      <div>{error && 'Error...'}</div>
    </div>
  );
}

export default Dashboard;
