import React from 'react';
import {Link} from 'react-router-dom'
import userIcon from "../../../../media/images/user-icon.png"
import { usersSetCurrent } from '../../../../slices/usersSlice';
import { albumsShowTogle } from '../../../../slices/albumsSlice';
import { useDispatch, useSelector } from 'react-redux';

const UsersItem = ({name, username, email, address, phone, website, company, id}) => {
    const {isAlbumsVisible} = useSelector((state) => state.albums)
    const dispatch = useDispatch();
    const popupOpen = () => {
        dispatch(usersSetCurrent(id))
        dispatch(albumsShowTogle())
    }
    const isPopupOpened = () => {
        if(isAlbumsVisible) {
            dispatch(albumsShowTogle())
        }
        dispatch(usersSetCurrent(id))
    }
    return (
        <div className='border-t p-10 my-5 mx-4 border-orange-500'>
            <div className='flex gap-10'>
                <div className=''>
                    <img className='max-w-[100px]' src={userIcon} alt="User Avatar" />
                </div>
                <div className=''>
                    <p className='text-black font-semibold'>{name}</p>
                    <span className='text-black/25 font-light'>{username}</span>
                    <p>phone: {phone}</p>
                    <p>email: {email}</p>
                    <p> website: {website}</p>
                </div>
            </div>
            <div>
                <h2 className='font-bold'>Location</h2>
                <p>Addrres</p>
                <span>{address.zipcode}, {address.street}, {address.suite}, {address.city}</span>
            </div>
            <div>
                <h2 className='font-bold'>Work</h2>
                <p>Company: {company.name} </p>
                <span>{company.catchPhrase}</span>
                <span>{company.bs}</span>
            </div>
            <ul className='flex items-center justify-between mt-5'>
                <li>
                    <button className='border hover:bg-black hover:text-white rounded-lg px-5 py-2' onClick={popupOpen} >Albums</button>
                </li>
                <li>
                    <Link className='border  hover:bg-black hover:text-white  rounded-lg px-5 py-2' onClick={isPopupOpened } to={`/userId${id}posts`}>Posts</Link >
                </li>
            </ul>
        </div>
    );
}

export default UsersItem;
