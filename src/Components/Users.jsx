import React, { useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { FaUserEdit } from 'react-icons/fa'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

const Users = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)

    // Delete user
    const handleDelete = (id) => {
        // console.log('delete', id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // console.log(id)
                fetch(`http://localhost:5000/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "The user has been deleted.",
                                icon: "success"
                            });
                            setUsers(users.filter((user) => user._id !== id))
                        }
                    })
            }
        })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        users.map((user, index) =>
                            <tbody key={user._id}>
                                {/* row  */}
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td className='flex items-center gap-5 text-2xl'>
                                        <button><FaUserEdit /></button>
                                        <button onClick={() => handleDelete(user._id)}><AiFillDelete /></button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    }
                </table>
            </div>
        </div>
    )
}

export default Users