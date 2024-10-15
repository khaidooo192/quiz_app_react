import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash';
const ModalViewUser = (props) => {
    const { show, setShow, dataUpdate } = props
    const handleClose = () => {
        setShow(false);
        setEmail('');
        setPassword('');
        setUsername('');
        setPreviewImage('');
        setId('')
        props.resetUpdateData();
    };
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("");
    const [previewImage, setPreviewImage] = useState("");
    const [id, setId] = useState('')
    useEffect(() => {
        if (!_.isEmpty(dataUpdate)) {
            //update state
            setEmail(dataUpdate.email)
            setPassword('Hardcode')
            setUsername(dataUpdate.username)
            setRole(dataUpdate.role)
            setId(dataUpdate.id)
            if (dataUpdate.image) {
                setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`)
            }

        }
    }, [dataUpdate])
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size='xl'
                backdrop='static'
                className='modal-view-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>User Detail</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                disabled
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                disabled
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                disabled
                            />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Role</label>
                            <select className="form-select"
                                disabled
                                value={role}
                            >
                                <option value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">ID</label>
                            <input
                                type="text"
                                className="form-control"
                                value={id}
                                disabled
                            />
                        </div>
                        <div className='col-md-12 img-preview'>
                            {previewImage ?
                                <img src={previewImage} />
                                :
                                <span>Preview image</span>
                            }
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="info" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalViewUser