import { Button, Modal } from 'flowbite-react'
import React, { useState } from 'react'
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import instance from '../../utils/axios';
import { toast } from 'react-toastify';

const DeleteCategory = ({id}) => {
    const [openModal, setOpenModal] = useState(false);
    const handleDelete = async() => {
        try {
            const res = await instance.delete(`/api/v1/category/delete/${id}`, {withCredentials: true});
            if(!res.data.success) {
                toast.error(res.data.message);
            }
            setOpenModal(false)
            toast.success(res.data.message);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
  return (
    <>
    <button className='font-medium text-red-600 hover:underline dark:text-red-500' onClick={() => setOpenModal(true)}>Delete</button>
    <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this category?
          </h3>
          <div className="flex justify-center gap-4">
            <Button color="failure" onClick={handleDelete}>
              {"Yes, I'm sure"}
            </Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              No, cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  </>
  )
}

export default DeleteCategory
