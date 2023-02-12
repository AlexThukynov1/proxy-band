import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {  postsFetched, postsFetchedError, postsFetch } from '../../../../slices/postsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PostItem from '../post-item/PostItem';
import Spinner from '../../../spinner/Spinner';
import ErrorMessage from '../../../error-message/ErrorMessage';


const PostList = ({id}) => {
    const {posts, isPostsLoading, isPostsError} = useSelector((state) => state.posts)
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(postsFetch())
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((rs) => {
            dispatch(postsFetched(rs.data))
        })
        .catch(()=> {dispatch(postsFetchedError())})
    }, [])

    const loader = isPostsLoading? <Spinner/>: null;
    return (
        <div className=' my-10 flex flex-col justify-center align-middle'>
            <Link className='border max-w-sm text-center self-center hover:bg-black hover:text-white  rounded-lg px-5 py-2' to='/'>HOME</Link>
            <span className='my-5 text-center font-medium text-black/20'>User ID: {id}</span>
            {loader}
          {
            isPostsError? <ErrorMessage/> :
          posts.map((post) => {
            return <PostItem
                key={post.id}
                title={post.title}
                body={post.body}
            />
          })} 
        </div>
    );
}

export default PostList;
