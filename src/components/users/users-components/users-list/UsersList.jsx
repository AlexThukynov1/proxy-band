import React from 'react';
import {useEffect } from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux'
import UsersItem from '../users-item/UsersItem';
import AlbumsList from '../../../albums/albums-components/albums-list/AlbumsList';
import { usersFetch, usersFetched,usersFetchedError } from '../../../../slices/usersSlice';
import Spinner from '../../../spinner/Spinner';
import ErrorMessage from '../../../error-message/ErrorMessage';

const UsersList = () => {
    const {users, curentUser, isLoadingUsers, isLoadingError} = useSelector((state) => state.users);
    const {isAlbumsVisible} = useSelector((state) => state.albums)
    const dispatch = useDispatch();
    const albums = isAlbumsVisible? <AlbumsList currId={curentUser}/> : null
    useEffect(()=> {
        dispatch(usersFetch())
     axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            
            dispatch(usersFetched(response.data))
        })
        .catch(() => dispatch(usersFetchedError())
        )
    }, [])

    const loader = isLoadingUsers? <Spinner/>: null;
    return (
        <div>
            {albums}
            {loader}
           {
            isLoadingError? <ErrorMessage/>:
            users.map((user) => {
             return <UsersItem 
                key={user.id}
                name={user.name} 
                username={user.username} 
                email={user.email} 
                address={user.address} 
                phone={user.phone} 
                website={user.website} 
                company={user.company}
                id={user.id}
            />
           })} 
        </div>
    );
}

export default UsersList;
