//import React, { useEffect, useState } from 'react';
//import axios from 'axios';

function AAcrud(){
    //const [listOfMembers, setListOfMembers] =  useState([]);

    return(
        <div>
            <div className="add-on-content container">
                <h4>Welcome to CRUD</h4>
                <h2>Hey, I am practicing React!</h2>
                <div className='row'>
                <div className='col-2'></div>
                <div className='col-8'>
                    <p>There are cards underneath this section that displays the members. Click the button below that says ADD A MEMBER to add another member. Click on the pencil icon to update the information of the members. Click on the trash bin icon on the to delete a member. In this practice project I am using React to create a simple website and for this page my focus is on the functionalities. The Home page was my attempt at creating the BLUEWIND website.</p>
                </div>
                <div className='col-2'></div>
                </div>
                    <button className='snd-btn btn'>ADD A MEMBER</button>
            </div>
            <div className="additional-content container">
                <h4>THERE ARE HYPHENS SATISFIED!</h4>
                <h4 className='text-primary'>WHY AQUA-AIR SEASIA?</h4>
                <h2>It has distinct personality</h2>
                <a href="https://www.facebook.com/people/Stuffed-Slice/61551555076645/"><button className='trd-btn btn'>SERVICE SAYS</button></a>
            </div>
        </div>
    )
}

export default AAcrud;