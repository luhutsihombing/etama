import React from 'react'

export default () => (
  <>
      <main className="main d-flex w-100">
          <div className="container d-flex flex-column">
              <div className="row h-100">
                  <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                      <div className="d-table-cell align-middle">

                          <div className="text-center mt-4">
                              <h1 className="h2">ETAMA - Enterprice Transportation Management</h1>
                              <p className="lead">
                                  Sign in to your account to continue
                              </p>
                          </div>

                          <div className="card">
                              <div className="card-body">
                                  <div className="m-sm-4">
                                      <div className="text-center">
                                          <img src="img\avatars\avatar.jpg" alt="Chris Wood"
                                               className="img-fluid rounded-circle" width="132" height="132" />
                                      </div>
                                      <form>
                                          <div className="form-group">
                                              <label>Email</label>
                                              <input className="form-control form-control-lg" type="email" name="email"
                                                     placeholder="Enter your email" />
                                          </div>
                                          <div className="form-group">
                                              <label>Password</label>
                                              <input className="form-control form-control-lg" type="password"
                                                     name="password" placeholder="Enter your password" />
                                                  <small>
                                                      <a href="pages-reset-password.html">Forgot password?</a>
                                                  </small>
                                          </div>
                                          <div>
                                              <div className="custom-control custom-checkbox align-items-center">
                                                  <input type="checkbox" className="custom-control-input"
                                                         value="remember-me" name="remember-me" checked="" />
                                                      <label className="custom-control-label text-small">Remember me
                                                          next time</label>
                                              </div>
                                          </div>
                                          <div className="text-center mt-3">
                                              <a href="/dashboard" className="btn btn-lg btn-primary">Sign
                                                  in</a>
                                          </div>
                                      </form>
                                  </div>
                              </div>
                          </div>

                      </div>
                  </div>
              </div>
          </div>
      </main>
  </>
)
