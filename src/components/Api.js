import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function FunctionalGetAPI_ByFetch() {

  const [apiData, setAPIData] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then(
      (response) => {
        response.json().then(response => {
          setAPIData(response);
        })
      })
      .catch(error => {
        console.log(error)
        setError(error)
      })
  }, [])

  return (
    <div style={{ width: "100%", height: "80vh", overflow: "scroll" }}>
      <strong className="heading"> Functional GET API Fetched </strong>
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
            error ? <p> Something went wrong </p> : null
          }
        </tbody>
      </table>
    </div>
  )
}

function FunctionalGetAPI() {

  const [apiData, setAPIData] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(
      response => {
        setAPIData(response.data);
      })
      .catch(error => {
        console.log(error)
        setError(error)
      })
  }, [])

  return (
    <div style={{ width: "100%", height: "80vh", overflow: "scroll" }}>
      <strong className="heading"> Functional GET API Fetched </strong>
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
            error ? <p> Something went wrong </p> : null
          }
        </tbody>
      </table>
    </div>
  )
}

export default FunctionalGetAPI;

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
    axios.post("http://127.0.0.1:8000/account/register", apiData)
    .then(
      response => {
        console.log(response.data)
        setGetAPIResponseData(response.data);
    })
    .catch(error => {
      console.log(error)
      setError(error)
    })
  }, [])

  return (
    <div>
      <strong className="heading"> Functional POST API Fetched </strong> <br/>
      {
        getAPIResponseData ?  JSON.stringify(getAPIResponseData) : null
      }
      {
        error ? <p> Something went wrong </p> : null
      }
    </div>
  )
}

export class ClassGetAPI extends React.Component {

  constructor() {
    super()
    this.state = {
      APIData: [],
      Error: ""
    }
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(response => {
        this.setState({ APIData: response.data });
    })
    .catch(error => {
      this.setState({ Error: error })
      console.log(error)
    })
  }

  render() {
    return (
      <div style={{ width: "100%", height: "80vh", overflow: "scroll" }}>
        <strong className="heading"> Class GET API Fetched </strong>
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
              }) : <em> Please wait... </em>
            }
            {
              this.state.error ? <em> Something went wrong </em> : null
            }
          </tbody>
        </table>
      </div>
    )
  }
}