import { useEffect, useState } from 'react';
import axios from "../api/axios"

function Delete() {
    const [newData, setNewData] = useState([]);
    const [userId, setUserId] = useState(0);


    function DeleteUser(flag) {
        if (flag) {
            axios.delete("/users/" + userId)
                .then((res) => {
                    alert("Data deleted Succesfully.");
                    console.log(res.data);
                    loadData();
                })
        }
    }

    function loadData() {
        axios.get("/users")
            .then((res) => {
                setNewData(res.data)
            })
    }

    useEffect(() => {
        loadData();
    }, [])
    return (
        <>
            <div className="container">
                <div className="userTable" style={{ maxHeight: "600px", overflowY: "auto" }}>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile Number</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {newData.map((eachData, i) => {
                                return (
                                    <tr key={eachData.id}>
                                        <td>{i + 1}</td>
                                        <td>{eachData.name}</td>
                                        <td>{eachData.email}</td>
                                        <td>{eachData.mobile}</td>
                                        <td>
                                            <button className='btn btn-danger me-2' data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => { setUserId(eachData.id) }}><i className='bi bi-trash-fill'></i></button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                {/* Modal */}
                <div className="modal fade" id='myModal'>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button className="btn-close" data-bs-dismiss="modal"></button>
                            </div>

                            <div className="modal-body">
                                <h3 className='text-center'>Are you sure you want to delete this record?</h3>
                                <div className="d-flex justify-content-center g-3 mt-4">
                                    <button className='btn btn-success me-3' data-bs-dismiss="modal">Cancel</button>
                                    <button className='btn btn-danger' onClick={DeleteUser} data-bs-dismiss="modal">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Delete;