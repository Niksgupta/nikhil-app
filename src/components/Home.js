import React from "react";
import { useEffect, useState } from "react";
// import './App.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/form';
// import FormControl from 'react-bootstrap/formControl';
// import Button from 'react-bootstrap/Button';
import Columns from 'react-columns';
// import Footer from "./footer";

import 'bootstrap/dist/css/bootstrap.min.css';

import axios from "axios";


function HomeFun() {

  //getting states through apis
  const [latest, setLatest]= useState([]);
  const [results, setResults]= useState([]);
  const [searchCountries, setSearchCountries]= useState("");

//   const [darkTheme, setDarkTheme] = useState(false);



  useEffect(() => {
    axios
    .all([
    axios.get("https://corona.lmao.ninja/v3/covid-19/all"),
    axios.get("https://corona.lmao.ninja/v2/countries?sort=country")
    ])
    .then(responseArr =>{
      setLatest(responseArr[0].data);
      setResults(responseArr[1].data);
    })    
    .catch(err=>{
      console.log(err);
    });
  
    
  }, []);
   
  //getting dates 
  const date= new Date(parseInt(latest.updated));
  const lastUpdated= date.toString();

  const filterCountries = results.filter((item) =>{
    return searchCountries !== "" ? item.country.toLowerCase().includes(searchCountries.toLowerCase()) 
    : item;
  })

  const countries = filterCountries.map((data, i) =>{
    return(
      

      <Card key={i}
    //   bg={darkTheme ? "dark" : "light"}
    //   text={darkTheme ? "light" : "dark"}
    //   className="text-center"
      style={{ margin: "10px" }}>
        <Card.Img variant="top" src={data.countryInfo.flag} />
      <Card.Body >
    <Card.Title>{data.country}</Card.Title>
        <Card.Text>Cases {data.cases}</Card.Text>
        <Card.Text>Deaths {data.deaths}</Card.Text>
        <Card.Text>Recovered {data.recovered}</Card.Text>
        <Card.Text>Today's cases {data.todatCases}</Card.Text>
        <Card.Text>Today's deaths {data.todayDeaths}</Card.Text>
        <Card.Text>Active {data.active}</Card.Text>
        <Card.Text>Critical {data.critical}</Card.Text>
      </Card.Body>
      
    </Card>
    );

  });
  // columns settings 
  var queries = [{
    columns: 2,
    query: 'min-width: 500px'
  }, {
    columns: 3,
    query: 'min-width: 1000px'
  }];



  return (
    <div>
         <h2
        data-tip="Last modified date: 16/05/2020 - v2.2"
        style={{ textAlign: "center" }}
      >
        COVID-19 Live Now
      </h2>

  <CardDeck>
  <Card bg="secondary" text="white" style={{margin: "10px"}}>
    <Card.Body>
      <Card.Title>Cases</Card.Title><br />
      <Card.Text>{latest.cases}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
  <small>Last updated {lastUpdated}</small>
    </Card.Footer>
  </Card>
  <Card bg="danger" text={"white"} style={{margin: "10px"}}>
    <Card.Body>
      <Card.Title>Deaths</Card.Title><br />
      <Card.Text>
        {latest.deaths}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated {lastUpdated}</small>
    </Card.Footer>
  </Card>
  <Card bg="success" text={"white"} style={{margin: "10px"}}>
   
    <Card.Body>
      <Card.Title>Recovered</Card.Title><br />
      <Card.Text>
    {latest.recovered}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated {lastUpdated}</small>
    </Card.Footer>
  </Card>
</CardDeck>

   {/* //search for country */}

<Form>
  <Form.Group controlId="formGroupSearch">
    <Form.Control type="text" placeholder="Search for countries" 
    onChange={(e)=>setSearchCountries(e.target.value)} />
  </Form.Group>
</Form>

  {/* //country data all */}

<Columns queries={queries}>{countries}</Columns>


    </div>
  );
}

export default HomeFun;
