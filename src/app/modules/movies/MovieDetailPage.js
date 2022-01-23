import MainLayout from 'app/layouts/MainLayout';
import React from 'react';

const MovieDetailPage = ({params}) => {
    const {id} = params;
    return (
        <MainLayout>
            <h4>Detail {id}</h4>
        </MainLayout>
    );
};

export default MovieDetailPage;