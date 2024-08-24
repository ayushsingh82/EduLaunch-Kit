import React, { useState } from 'react';


const NFT = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    description: '',
    price: '',
    file: null,
  });

  // Handler for form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler for file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      file: file,
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className='bg-black h-screen flex flex-col justify-center'>
    <div>
    <h1 className='text-blue-500 flex justify-center text-2xl font-semibold '>EduChain</h1>
    <h1 className='text-white flex justify-center text-lg font-medium mt-[20px] '>
    Fill to upload nft on EduChain
</h1>
    </div>
      <div className='flex flex-col border border-4 border-transparent rounded-xl items-center mt-[40px] bg-blue-100 mx-[330px]'>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className='mt-[20px] border border-2 border-transparent px-[10px] text-black bg-blue-300 font-semibold'
          />
          <br />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className='mt-[20px] border border-2 border-transparent px-[10px] text-black bg-blue-300 font-semibold'
          />
          <br />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className='mt-[20px] border border-2 border-transparent px-[10px] text-black bg-blue-300 font-semibold'
          />
          <br />
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className='mt-[20px] border border-2 border-transparent px-[10px] text-black bg-blue-300 font-semibold'
          />
          <br />
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            className='mt-[20px] border border-2 border-transparent px-[10px]'
          />
          <br />
          {formData.file && (
            <img src={URL.createObjectURL(formData.file)} alt="Uploaded File" style={{ maxWidth: '200px', marginTop: '10px' }} />
          )}
          <br />
          <button type="submit" className='mt-[20px] border border-4 border-blue-300 px-[10px] py-[5x] rounded-xl font-semibold
          mb-[20px]'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default NFT;