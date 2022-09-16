import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import './Dashboard.css';
export default function Dashboard() {
  return (
    <>
      <div className="container-fluid bg-main">
      </div>
      <div className="container">
        <table class="table table-borderless table-main">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Job List</th>
              <th scope="col">Hiring Manager</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td><span class="badge badge-success">Completed</span></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td><span class="badge badge-primary">Active</span></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td><span class="badge badge-danger">Not Started</span></td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td><span class="badge badge-success">Completed</span></td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td><span class="badge badge-primary">Active</span></td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td><span class="badge badge-success">Completed</span></td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td><span class="badge badge-danger">Not Started</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
