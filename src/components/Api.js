import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FunctionalGetAPI() {

  const [apiData, setAPIData] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(
      response => {
        setAPIData([...response.data]);
      })
      .catch(error => {
        console.log(error)
        setError([error])
      })
  })

  return (
    <div style={{ width: "100%", height: "200px", overflow: "scroll" }}>
      <p> Functional API Fetched</p>
      <table style={{ textAlign: "left" }}>
        <tbody>
          {
            apiData ?
              Object.values(apiData).map((ele, index) => {
                return (
                  <tr key={index}>
                    <td> <strong>  User ID : </strong> {ele.userId} </td>
                    <td> <strong> Title : </strong> {ele.title} </td>
                  </tr>
                )
              }) : <strong> Loading... </strong>
          }
          {
            error ? <em> <strong> API Error</strong> </em> : null
          }
        </tbody>
      </table>
    </div>
  )
}

export default FunctionalGetAPI;

export class ClassGetAPI extends React.Component {

  constructor() {
    super()
    this.state = {
      APIData: [],
      Error: ""
    }
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(
      response => {
        this.setState({ APIData: response.data });
      })
      .catch(error => {
        this.setState({ Error: error })
        console.log(error)
      })
  }

  render() {
    return (
      <div style={{ width: "100%", height: "200px", overflow: "scroll" }}>
        <p> Class API Fetched</p>
        <table style={{ textAlign: "left" }}>
          <tbody>
            {
              this.state.APIData ?
                Object.values(this.state.APIData).map((ele, index) => {
                  return (
                    <tr key={index}>
                      <td> <strong>  User ID : </strong> {ele.userId} </td>
                      <td> <strong> Title : </strong> {ele.title} </td>
                    </tr>
                  )
                }) : null
            }
            {
              this.state.error ? <em> <strong> API Error </strong> </em> : null
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export function FunctionalPostAPI() {

  const apiData = {
    first_name: "dipak",
    middle_name: "ashok",
    last_name: "hedaoo",
    email: "dipakheo0@gmail.com",
    phone: "4578916021",
    aadhar: "452814612300",
    country: "India",
    state: "Maharshtra",
    city: "Nagpur",
    constitucy: "Nagpur Central",
    ward: "111",
    landmark: "timki",
    pincode: "440018",
    gender: "male",
    date_of_birth: "2020-03-10",
    occupation_type: "job",
    occupation_title: "finance"
  };
  const [getAPIResponseData, setGetAPIResponseData] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    axios.post("http://127.0.0.1:8000/account/register", apiData).then(
      response => {
        console.log(response.data)
        setGetAPIResponseData(response.data);
      })
      .catch(error => {
        console.log(error)
        setError([error])
      })
  })

  return (
    <div>
      <table>
        <tr>
          <td> {getAPIResponseData ? JSON.stringify(getAPIResponseData) : error}</td>
        </tr>
      </table>
    </div>
  )
}