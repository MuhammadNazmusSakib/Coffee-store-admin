import React from 'react'
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const chef = e.target.chef.value
        const supplier = e.target.supplier.value
        const taste = e.target.taste.value
        const category = e.target.category.value
        const details = e.target.details.value
        const photo = e.target.photo.value
        const newCoffee = { name, chef, supplier, taste, category, details, photo }
        console.log(newCoffee)

        // Sending data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Added successfully",
                        icon: "success"
                      });
                }
            })
    }
    return (
        <div>
            <div className="max-w-2xl mx-auto mt-10 p-6 my-10 bg-gray-100 rounded shadow">
                <h2 className="text-center text-2xl font-semibold mb-4">Add New Coffee</h2>
                <p className="text-center mb-6 text-gray-700">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                </p>
                <form onSubmit={handleAddCoffee} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name='name'
                            placeholder="Enter coffee name"
                            className="mt-1 p-2 w-full border border-gray-300 rounded"
                        />
                    </div>

                    {/* Chef Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Chef</label>
                        <input
                            type="text"
                            name='chef'
                            placeholder="Enter coffee chef"
                            className="mt-1 p-2 w-full border border-gray-300 rounded"
                        />
                    </div>

                    {/* Supplier Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Supplier</label>
                        <input
                            type="text"
                            name='supplier'
                            placeholder="Enter coffee supplier"
                            className="mt-1 p-2 w-full border border-gray-300 rounded"
                        />
                    </div>

                    {/* Taste Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Taste</label>
                        <input
                            type="text"
                            name='taste'
                            placeholder="Enter coffee taste"
                            className="mt-1 p-2 w-full border border-gray-300 rounded"
                        />
                    </div>

                    {/* Category Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Category</label>
                        <input
                            type="text"
                            name='category'
                            placeholder="Enter coffee category"
                            className="mt-1 p-2 w-full border border-gray-300 rounded"
                        />
                    </div>

                    {/* Details Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Details</label>
                        <input
                            type="text"
                            name='details'
                            placeholder="Enter coffee details"
                            className="mt-1 p-2 w-full border border-gray-300 rounded"
                        />
                    </div>

                    {/* Photo URL Field */}
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Photo</label>
                        <input
                            type="text"
                            name='photo'
                            placeholder="Enter photo URL"
                            className="mt-1 p-2 w-full border border-gray-300 rounded"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-brown-600 transition duration-200"
                        >
                            Add Coffee
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddCoffee