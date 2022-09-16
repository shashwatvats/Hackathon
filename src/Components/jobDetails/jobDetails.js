import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function JobDetails() {
    return (
        <>
            <div className="container-fluid bg-main">
            </div>
            <div className='container'>
                <table class="table table-borderless table-main">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Hiring Manager</th>
                            <th scope="col">Panel List</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td><Dropdown>
                                <Dropdown.Toggle size="sm" variant="secondary" id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown></td>
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

export default JobDetails