import React from 'react';

const PostItem = ({title, body}) => {
    return (
        <div className='border p-[10px] m-[10px]'>
          <h2 className='text-center font-bold text-lg my-2'>{title}</h2>
          <p>{body}</p>  
        </div>
    );
}

export default PostItem;
