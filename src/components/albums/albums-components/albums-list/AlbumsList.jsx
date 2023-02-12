import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { albumsFetched, albumsFetch,albumsFetchedError, albumsShowTogle } from '../../../../slices/albumsSlice';
import { useEffect } from 'react';
import AlbumsItem from '../albums-item/AlbumsItem';
import ErrorMessage from '../../../error-message/ErrorMessage';
import Spinner from './../../../spinner/Spinner';

const AlbumsList = ({currId}) => {
    const {albums, isAlbumsLoading, isAlbumsError} = useSelector((state) => state.albums)
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(albumsFetch())
        axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${currId}`)
        .then((rs) => {
            
            dispatch(albumsFetched(rs.data))
        })
        .catch(()=> {dispatch(albumsFetchedError())})
    }, [])

    const loader = isAlbumsLoading? <Spinner/>: null;
    
    return (
       <div className='relative z-10 flex justify-center bg-black/5'>
            <div className='fixed p-[25px] w-11/12 z-20 flex flex-col mt-[15px] bg-zinc-300'>
                <button className='border max-w-sm text-center self-center hover:bg-black hover:text-white  rounded-lg px-5 py-2' onClick={()=> dispatch(albumsShowTogle())}>Close</button>
                <span>Users ID: {currId}</span>
                {loader}
               {
                
                isAlbumsError? <ErrorMessage/> :
                albums.map((album) => {
                    return <AlbumsItem title={album.title}/>
                })
               } 
            </div>
       </div>
    );
}

export default AlbumsList;
