import { useEffect, useState } from "react"
import axios from "../api/axios";
function Add() {

    const [data, setData] = useState({
        id: "",
        name: "",
        email: "",
        mobile: ""
    })
    const [newData, setnewData] = useState([]);

    function handleChange(e) {
        setData({ ...data, [e.target.id]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const userData = {
            name: data.name,
            email: data.email,
            mobile: data.mobile
        }
        axios.post("/users", userData)
            .then((res) => {
                console.log(res.data);
                alert("User Added Succesfully.");
                loadData();
            })
        setData({
            id: "",
            name: "",
            email: "",
            mobile: "",
        })
    }

    function loadData() {
        axios.get("/users")
            .then((res) => {
                setnewData(res.data);
            })
    }

    useEffect(() => {
        loadData();
    }, [])
    return (
        <>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-lg-4 border-end">
                        <h3 className='my-5 text-center'>Add User Details</h3>
                        <form onSubmit={handleSubmit} className='d-flex justify-content-center align-items-center flex-column'>
                            <div className="form-floating w-75 mb-3">
                                <input type="text" onChange={handleChange} value={data.name} className="form-control border-black" id='name' placeholder='Name' required />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="form-floating w-75 mb-3">
                                <input type="email" onChange={handleChange} value={data.email} className="form-control border-black" id='email' placeholder='Email' required />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="form-floating w-75 mb-3">
                                <input type="number" onChange={handleChange} value={data.mobile} className="form-control border-black" id='mobile' placeholder='Mobile Number' required />
                                <label htmlFor="mobile">Mobile Number</label>
                            </div>
                            <button type="submit" className='btn btn-success'>Add User</button>
                        </form>
                    </div>

                    <div className="col-lg-8 mt-2" style={{ maxHeight: "600px", overflowY: "auto" }}>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    newData.map((eachData, i) => {
                                        return (
                                            <tr key={eachData.id}>
                                                <td>{i + 1}</td>
                                                <td>{eachData.name}</td>
                                                <td>{eachData.email}</td>
                                                <td>{eachData.mobile}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add;
