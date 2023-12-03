import React from 'react';

const DaynamicPage = ({ params, searchParams }) => {
    // console.log(params);
    return (
        <div>
            <h1> this is daynamic page content : {params.id}</h1>
            <h1> this is searchParams : {searchParams.category}</h1>
        </div>
    );
};

export default DaynamicPage;