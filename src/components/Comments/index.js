import React from 'react'

const Comments = () => {
    return (
        <div>

            <button type="button" className="btn btn-primary mx-2 mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                View Comments
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Blog Comments</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                                <div>

                                </div>
                                <div className='my-3 text-center'>
                                    <input className='form-control' type='text' placeholder='Add Comment' />
                                    <button className='btn btn-dark my-2'>Add</button>
                                </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments
