
import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

const Home = () => {
    const coffeeLoader = useLoaderData()
    const [coffees, setCoffees] = useState(coffeeLoader)


    // Delete button
    const hanldleDelete = (id) => {
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
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            setCoffees(coffees.filter((coffee) => coffee._id !== id))
                        }
                    })
            }
        })
    }
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-5'>Our Popular Products</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                {
                    coffees.map(coffee =>
                        <div key={coffee._id} className='border border-gray-200 rounded-lg p-3'>
                            <img src={coffee.photo} className='w-96 h-60' />
                            <h2 className='text-2xl font-bold py-3'>{coffee.name}</h2>
                            <p className='text-lg py-1'><span className='font-semibold'> Chief: </span>{coffee.chef}</p>
                            <p className='text-lg py-1'><span className='font-semibold'>Supplier: </span>{coffee.supplier}</p>
                            <p className='text-lg py-1'><span className='font-semibold'>Taste: </span>{coffee.taste}</p>
                            <p className='text-lg py-1'><span className='font-semibold'>Category: </span>{coffee.category}</p>
                            <p className='text-lg py-1'><span className='font-semibold'>Details: </span> {coffee.details}</p>

                            <div className='flex place-content-around my-3'>
                                <button className='btn bg-green-500 lg:px-10'>View</button>
                                <Link to={`/update-coffee/${coffee._id}`}><button className='btn bg-green-500 lg:px-10'>Edit</button></Link>
                                <button onClick={() => hanldleDelete(coffee._id)} className='btn bg-red-500 lg:px-10'>Delete</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Home