import { Link } from 'react-router-dom';

function Login(){
    
    return(
        <div>
            <div className="add-on-content container">
                <h4>Do you want to log in?</h4>
                <h2>Shore! Let's sea what's in store for us over air.</h2>
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col-8'>
                        <div className="card user-card mt-4">
                            <form>
                                <div className='card-body card-p-text px-5'>
                                    <div className="form-group row mt-3 mb-1">
                                        <label htmlFor="crudUsername" className="col-sm-3 col-form-label d-flex justify-content-start">Username:</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="crudUsername" name="crudUsername" placeholder="Enter Username" required />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-2">
                                        <label htmlFor="crudPassword" className="col-sm-3 col-form-label d-flex justify-content-start">Password:</label>
                                        <div className="col-sm-9">
                                            <input type="password" className="form-control" id="crudPassword" name="crudPassword" placeholder="Enter Password" required />
                                        </div>
                                    </div>
                                </div>
                                <Link to='/'>
                                    <button type='submit' className='main-btn btn py-2 px-5 mb-4'>Login</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                    <div className='col-2'></div>
                </div>
            </div>
        </div>
    )
}

export default Login;