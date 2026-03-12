import { useEffect, useState } from 'react'
import axios from "../api/axios"

function Edit() {
    const [data, setData] = useState([]);
    const [newData, setnewData] = useState({
        name: "",
        email: "",
        mobile: ""
    });
    const [userId, setUserId] = useState(0);

    function handleChange(e) {
        setnewData({ ...newData, [e.target.id]: e.target.value });
    }

    function editUserList(id) {
        setUserId(id);
        axios.get("/users/" + id)
            .then((res) => {
                setnewData(res.data);
            })
    }

    function handleUpdate(e) {
        e.preventDefault();
        axios.put("/users/" + userId, {
            ...newData,
            id: userId
        })
            .then((res) => {
                alert("Data Updated Succesfully")
                console.log(res.data);
                loadData();
            })
    }


    function loadData() {
        axios.get("/users")
            .then((res) => {
                setData(res.data);
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
                            {data.map((eachData, i) => {
                                return (
                                    <tr key={eachData.id}>
                                        <td>{i + 1}</td>
                                        <td>{eachData.name}</td>
                                        <td>{eachData.email}</td>
                                        <td>{eachData.mobile}</td>
                                        <td>
                                            <button className='btn btn-primary me-2' onClick={() => editUserList(eachData.id)} data-bs-toggle="modal" data-bs-target="#myModal"><i className='bi bi-pencil-fill'></i></button>
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
                                <h3 className='modal-title'>Update User details</h3>
                                <button className="btn-close" data-bs-dismiss="modal"></button>
                            </div>

                            <div className="modal-body">
                                <form>
                                    <div className="form-floating mb-3">
                                        <input type="text" value={newData.name} onChange={handleChange} className='form-control border-black fs-5' id="name" placeholder='Name' />
                                        <label htmlFor="name" className='text-dark'>Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="email" value={newData.email} onChange={handleChange} className='form-control border-black fs-5' id="email" placeholder='Email' />
                                        <label htmlFor="email" className='text-dark'>Email</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="number" value={newData.mobile} onChange={handleChange} className='form-control border-black fs-5' id="mobile" placeholder='Mobile Number' />
                                        <label htmlFor="mobile" className='text-dark'>Mobile Number</label>
                                    </div>

                                    <div className='d-flex justify-content-center gap-2'>
                                        <button className='btn btn-primary w-50' data-bs-dismiss="modal">Cancel</button>
                                        <button className='btn btn-success w-50' onClick={handleUpdate} data-bs-dismiss="modal">Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Edit;