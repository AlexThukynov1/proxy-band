import React from 'react';

const AlbumsItem = ({title}) => {
    return (
        <div className='border p-[10px] m-[10px]'>
            <h3 className='text-black'>{title}</h3>
        </div>
    );
}

export default AlbumsItem;
