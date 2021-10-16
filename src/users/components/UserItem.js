import React, {useState, useContext}  from 'react';
import { Link } from 'react-router-dom';
import Button from '../../shared/components/FormElements/Button'
import Card from '../../shared/components/UIElements/Card';
import './UserItem.css';
import PersonIcon from '@mui/icons-material/Person';
import Modal from '../../shared/components/UIElements/Modal'
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import {AuthContext} from '../../shared/context/auth-context'
import {useHttpClient} from '../../shared/hooks/http-hook';

import './UserItem.css';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';



const UserItem = props => {

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const auth =useContext(AuthContext);
  const {isLoading, error, sendRequest, clearError} = useHttpClient();


  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);

};

const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
};

const confirmDeleteHandler = async () => {
    setShowConfirmModal(false);
    console.log('deleting'+ props.id);
    try {
      await sendRequest(
          `http://localhost:5000/auth/users/${props.id}`,
          'DELETE'
          //,
      //     null,
      //     {
      //         'Content-Type': 'application/json',
      //         Authorization: 'Bearer ' + auth.token
      //     }
      );
      props.onDelete(props.id);
  //     notify.show('User is deleted successfully','error',4000);
  } catch (err) {
  }
  
};




  return (
    <React.Fragment>
     <ErrorModal error={error} onClear={clearError}/>
    <Modal
                show={showConfirmModal}
                onCancel={cancelDeleteHandler}
                header="Are you sure?"
                footerClass="user-item__modal-actions"
                footer={
                    <React.Fragment>
                        <Button inverse onClick={cancelDeleteHandler}>
                            CANCEL
                        </Button>
                        <Button danger onClick={confirmDeleteHandler}>
                            DELETE
                        </Button>
                    </React.Fragment>
                }
            >
                <p>
                    Are you sure you want to delete this user? Please note that it
                    can't be undone thereafter.
                </p>
            </Modal>
    
    <li className="user-item">
      <Card className="user-item__content">
        {isLoading && <LoadingSpinner asOverlay/>}
        <Link to="/updateuser">
          <div className="user-item__info">
            <PersonIcon />
            <h2>{props.name}</h2>
            <h3>{props.email}</h3>
            <h3>{props.id}</h3>
          </div>
       <br/>

        </Link>

      </Card>
      <Card>
          <div className="user-item__actions">
            <Button >EDIT</Button>
            <Button danger  onClick={showDeleteWarningHandler}>
              DELETE
            </Button>
          </div>
          </Card>
    </li>
  
    </React.Fragment>
  );
};

export default UserItem;
