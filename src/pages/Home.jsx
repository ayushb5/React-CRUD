import React from "react";

function Home() {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">React CRUD Application</h2>

            <div className="row g-4">
                <div className="col-md-3">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title text-primary">Create (Add User)</h5>
                            <p className="card-text">
                                Add new user details like name, email, and mobile number to the
                                database using React forms and API requests.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title text-success">Read (View Users)</h5>
                            <p className="card-text">
                                Fetch and display all users from the server in a table using
                                Axios and React state.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title text-warning">Update (Edit User)</h5>
                            <p className="card-text">
                                Modify existing user information and update it in the database
                                using PUT requests.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title text-danger">Delete (Remove User)</h5>
                            <p className="card-text">
                                Remove a user record permanently from the database using DELETE
                                requests.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-5">
                <p className="text-muted">
                    This project demonstrates CRUD operations in React using Bootstrap 5 for the user interface, Axios for handling HTTP requests, and json-server to manage user data.
                </p>
            </div>
        </div>
    );
}

export default Home;