import React, { useState } from 'react';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import ScrollRevealElement from '../ScrollRevealElement';

function AAcrud(){
    const [nameMember, setNameMember] = useState("");
    const [usernameMember, setUsernameMember] = useState("");
    const [usernameUniqueMember, setUsernameUniqueMember] = useState(true);
    const [passwordMember, setPasswordMember] = useState("");
    const [passwordMemberRe, setPasswordMemberRe] = useState('');
    const [passwordMemberMatch, setPasswordMemberMatch] = useState(true);
    const [bioMember, setBioMember] = useState("");

    const [listOfMembers, setListOfMembers] =  useState([]);

    const [newBioMember, setNewBioMember] = useState("");
    const [errorBioUpdate, setErrorBioUpdate] = useState(false);
    const [errorBioUpdateMsg, setErrorBioUpdateMsg] = useState("");

    const addMember = (e) => {
        e.preventDefault();

        if (passwordMember !== passwordMemberRe) {
            setPasswordMemberMatch(false);
            return;
        }

        setPasswordMemberMatch(true);

        Axios.post('http://localhost:9001/create', {
            name: nameMember,
            username: usernameMember,
            password: passwordMember,
            bio: bioMember
        }).then((response) => {
            if (response.status === 200) {
                setUsernameUniqueMember(true);
                getMembers();
            } else if (response.status === 400) {
                setUsernameUniqueMember(false);
            }
        }).catch((error) => {
            console.error("Axios Error:", error);
            setUsernameUniqueMember(false);
        });
    }

    const getMembers = () =>{
        Axios.get('http://localhost:9001/read').then((response) => {
          setListOfMembers(response.data);
        });
    };

    const updateMemberBio = (id) => {
        if(!newBioMember){
            setErrorBioUpdateMsg("Bio can't be empty.");
            setErrorBioUpdate(true);
        }else{
            setErrorBioUpdate(false);
            setErrorBioUpdateMsg("");

            Axios.put('http://localhost:9001/update', {bio: newBioMember, id: id}).then((response) => {
                setListOfMembers(listOfMembers.map((val)  => {
                return val.id === id ? {id: val.id, name: val.name, username: val.username, password: val.password, bio: newBioMember} : val
                }));
            });
        }
    };

    const deleteMember = (id, usernameMember) => {
        Axios.delete(`http://localhost:9001/delete/${id}`).then((response) => {
            setListOfMembers(listOfMembers.filter((val) => {
            return val.id !== id;
            }));
        });
    };

    return(
        <div>
            <div className="add-on-content container">
                <h4>Welcome to CRUD</h4>
                <h2>Hey, I am practicing React!</h2>
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col-8'>
                        <p>There are cards underneath this section that displays the members. Click the button below that says Add Member to add another member. Click Show Members button to show all the members. Click on the pencil icon to update the bio of the members. Click on the trash bin icon to delete a member. In this practice project I am using React to create a simple website and for this page my focus is on the functionalities. The Home page was my attempt at creating the BLUEWIND website.</p>
                    </div>
                    <div className='col-2'></div>
                </div>
                <h3>Let's-a-GO!</h3>
            </div>
            <div className="additional-content container">
                <div className='row'>
                    <div className='col-3'></div>
                    <div className='col-6'>
                    <ScrollRevealElement>
                        <div className="card user-card">
                        <form>
                        <div className='card-header bg-secondary'>
                            <div className='row'>
                                <div className='col-7 d-flex justify-content-start mt-2 text-white card-header-text'>
                                    <span><FontAwesomeIcon icon={icon({name: 'user'})} /></span><p>&nbsp;&nbsp;Member Information</p>
                                </div>
                                <div className='col-5 d-flex justify-content-end'>
                                    <button type='submit' onClick={addMember} value='Add' className='snd-btn btn'>Add Member</button>
                                </div>
                            </div>
                        </div>
                        <div className='card-body card-p-text'>
                        {!usernameUniqueMember && (
                            <div class="alert alert-danger" role="alert">
                                Username is already taken!
                            </div>
                        )}
                        {!passwordMemberMatch && (
                            <div class="alert alert-danger" role="alert">
                                Passwords do not match!
                            </div>
                        )}
                            <div className="form-group row mb-2">
                                <label htmlFor="crudName" className="col-sm-3 col-form-label d-flex justify-content-start">Name:</label>
                                <div className="col-sm-9">
                                        <input type="text" onChange={(event) => {setNameMember(event.target.value)}} className="form-control" id="crudName" name="crudName" placeholder="Full Name" required />
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label htmlFor="crudUsername" className="col-sm-3 col-form-label d-flex justify-content-start">Username:</label>
                                <div className="col-sm-9">
                                    <div className='input-group'>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">@</span>
                                        </div>
                                        <input type="text" onChange={(event) => {setUsernameMember(event.target.value)}} className="form-control" id="crudUsername" name="crudUsername" placeholder="Username" required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label htmlFor="crudPassword" className="col-sm-3 col-form-label d-flex justify-content-start">Password:</label>
                                <div className="col-sm-9">
                                    <input type="password" onChange={(event) => {setPasswordMember(event.target.value)}} className="form-control" id="crudPassword" name="crudPassword" placeholder="Password" required />
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label htmlFor="crudPasswordRe" className="col-sm-3 col-form-label d-flex justify-content-start">Re Password:</label>
                                <div className="col-sm-9">
                                    <input type="password" onChange={(event) => {setPasswordMemberRe(event.target.value)}} className="form-control" id="crudPasswordRe" name="crudPasswordRe" placeholder="Confirm Password" required />
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label htmlFor="crudBio" className="col-sm-3 col-form-label d-flex justify-content-start">Bio:</label>
                                <div className="col-sm-9">
                                    <textarea onChange={(event) => {setBioMember(event.target.value)}}  className="form-control" id="crudBio" name="crudBio" placeholder="Bio" rows='3' required />
                                </div>
                            </div>
                        </div>
                        </form>
                        </div>
                    </ScrollRevealElement>
                    </div>
                    <div className='col-3'></div>
                </div>
                <ScrollRevealElement>
                    <button onClick={getMembers} className='trd-btn btn mb-2'>Show Members</button>
                </ScrollRevealElement>
                <div className='row'>
                    <div className='col-3'></div>
                    <div className='col-6'>
                    {listOfMembers.map((val, key) => {
                        return(<div className="card user-card">
                        <div className='card-header'>
                            <div className='row'>
                                <div className='col-6 d-flex justify-content-start mt-2 card-header-text'>
                                <span><FontAwesomeIcon icon={icon({name: 'tag'})} /></span><p>&nbsp;&nbsp;Number {key + 1}</p>
                                </div>
                                <div className='col-4'>
                                    <textarea onChange={(event) => {setNewBioMember(event.target.value)}}  className="form-control mt-1" id="crudBioUpdate" name="crudBioUpdate" placeholder={ errorBioUpdate ? errorBioUpdateMsg : "Update Bio" } rows='1' required />
                                </div>
                                <div className='col-2 d-flex justify-content-end btn-group'>
                                    <button onClick={() => updateMemberBio(val.id)} className='btn btn-sm btn-warning'>
                                        <FontAwesomeIcon icon={icon({name: 'pen-to-square'})} />
                                    </button>
                                    <button onClick={() => deleteMember(val.id)} className='btn btn-sm btn-danger'>
                                        <FontAwesomeIcon  icon={icon({name: 'trash-can'})} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title card-ti-text">{val.name}</h5>
                            <h6 className="card-subtitle card-sub-text mb-2 text-muted">@{val.username}</h6>
                            <p className="card-text card-p-text">"{val.bio}"</p>
                        </div>
                    </div>);
                    })}
                    </div>
                    <div className='col-3'></div>
                </div>
            </div>
        </div>
    )
}

export default AAcrud;