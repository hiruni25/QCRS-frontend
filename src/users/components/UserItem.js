import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../shared/components/FormElements/Button'
import Card from '../../shared/components/UIElements/Card';
import './UserItem.css';
import PersonIcon from '@mui/icons-material/Person';


const UserItem = props => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to="/updateuser">
         
          <div className="user-item__info">
            <PersonIcon />
            <h2>{props.name}</h2>
            <h3>{props.email}</h3>
            <h3>{props.id}</h3>
          </div>

        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
