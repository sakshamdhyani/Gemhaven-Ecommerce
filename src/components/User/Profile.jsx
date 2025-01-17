import React, { Fragment ,useEffect, useState} from 'react';
import MetaData from '../Layout/MetaData';
import {useSelector , useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../Layout/Loader/Loader';
import "./Profile.css"

const Profile = () => {

    const navigate = useNavigate();
    const {loading , user} = useSelector (state => state.userAuth);
    
    return (
      <Fragment>
        {loading ? <Loader/> : 
            <Fragment>
                <MetaData title={`Profile`}/>

                <div className="profileContainer">
                    <div>
                        <h1>Profile</h1>
                        <img src= {user?.avatar?.url ? user.avatar.url : ""} alt={""} />
                        <Link to="/me/update">Edit Profile</Link>
                    </div>
                    <div>
                        <div>
                            <h4>Full Name</h4>
                            <p>{user?.name || ""}</p>
                        </div>
                        <div>
                            <h4>Email</h4>
                            <p>{user?.email || ""}</p>
                        </div>
                        <div>
                            <h4>Joined On</h4>
                            <p>{String(user?.createdAt).substr(0,10) || ""}</p>
                        </div>
                        <div>
                            <Link to="/orders">My Orders</Link>
                            <Link to="/password/update">Change Password</Link>
                        </div>
                    </div>
                </div>
            </Fragment>
        }
    </Fragment>
  )
}
export default  Profile;
