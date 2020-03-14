import React, { useMemo, useState, useEffect } from "react";
import API from "../src/utils/API"

import Table from "../src/components/Table";
import "./App.css";

// const Picture = ({ values }) => {
//   return (
//     <>
//       {values.map((image) => {
//         return (
//           <img src={image} alt={image} className="image"/>
//         )
//       })}
//     </>
//   );
// };

function App() {

  const columns = useMemo(
    () => [
      {
        Header: "Employees",
        columns: [
          // {
          //   Header: "Picture",
          //   accessor: "image",
          // Cell: ({cell: {value}}) => { return <div><Picture values={value}/></div> }
          // },
          {
            Header: "First Name",
            accessor: "firstName"
          },
          {
            Header: "Last Name",
            accessor: "lastName"
          }
        ]
      },
      {
        Header: "Details",
        columns: [
          {
            Header: "Username",
            accessor: "username"
          },
          {
            Header: "City",
            accessor: "city"
          }
        ]
      }
    ],
    []
  );

  const [data, setData] = useState([]);
  

  // useEffect(() => {
  //   (async () => {
  //     const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
  //     setData(result.data);
  //     console.log(result.data);
  //   })();
  // }, []);

  useEffect(() => {
    loadUsers();
  }, []);

  function loadUsers() {
    API.searchTerms()
      .then(res => {
        setData(res);
        console.log(res);
        });
      }

  console.log(data);
  
  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;