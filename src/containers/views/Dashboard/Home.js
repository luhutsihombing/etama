import React from 'react'

export default () => (
    <>
        <div className="main">
            <nav className="navbar navbar-expand navbar-light bg-white">
                <a className="sidebar-toggle d-flex mr-2">
                    <i className="hamburger align-self-center"></i>
                </a>

                <form className="form-inline d-none d-sm-inline-block">
                    <input className="form-control form-control-no-border mr-sm-2" type="text"
                           placeholder="Search projects..." aria-label="Search" />
                </form>

                <div className="navbar-collapse collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-icon dropdown-toggle" href="#" id="messagesDropdown"
                               data-toggle="dropdown">
                                <div className="position-relative">
                                    <i className="align-middle" data-feather="message-circle"></i>
                                    <span className="indicator">4</span>
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0"
                                 aria-labelledby="messagesDropdown">
                                <div className="dropdown-menu-header">
                                    <div className="position-relative">
                                        4 New Messages
                                    </div>
                                </div>
                                <div className="list-group">
                                    <a href="#" className="list-group-item">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-2">
                                                <img src="img\avatars\avatar-5.jpg"
                                                     className="avatar img-fluid rounded-circle" alt="Ashley Briggs"/>
                                            </div>
                                            <div className="col-10 pl-2">
                                                <div className="text-dark">Ashley Briggs</div>
                                                <div className="text-muted small mt-1">Nam pretium turpis et arcu. Duis
                                                    arcu tortor.
                                                </div>
                                                <div className="text-muted small mt-1">15m ago</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-2">
                                                <img src="img\avatars\avatar-2.jpg"
                                                     className="avatar img-fluid rounded-circle" alt="Carl Jenkins"/>
                                            </div>
                                            <div className="col-10 pl-2">
                                                <div className="text-dark">Carl Jenkins</div>
                                                <div className="text-muted small mt-1">Curabitur ligula sapien euismod
                                                    vitae.
                                                </div>
                                                <div className="text-muted small mt-1">2h ago</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-2">
                                                <img src="img\avatars\avatar-4.jpg"
                                                     className="avatar img-fluid rounded-circle" alt="Stacie Hall"/>
                                            </div>
                                            <div className="col-10 pl-2">
                                                <div className="text-dark">Stacie Hall</div>
                                                <div className="text-muted small mt-1">Pellentesque auctor neque nec
                                                    urna.
                                                </div>
                                                <div className="text-muted small mt-1">4h ago</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-2">
                                                <img src="img\avatars\avatar-3.jpg"
                                                     className="avatar img-fluid rounded-circle" alt="Bertha Martin"/>
                                            </div>
                                            <div className="col-10 pl-2">
                                                <div className="text-dark">Bertha Martin</div>
                                                <div className="text-muted small mt-1">Aenean tellus metus, bibendum
                                                    sed, posuere ac, mattis non.
                                                </div>
                                                <div className="text-muted small mt-1">5h ago</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="dropdown-menu-footer">
                                    <a href="#" className="text-muted">Show all messages</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-toggle="dropdown">
                                <div className="position-relative">
                                    <i className="align-middle" data-feather="bell-off"></i>
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0"
                                 aria-labelledby="alertsDropdown">
                                <div className="dropdown-menu-header">
                                    4 New Notifications
                                </div>
                                <div className="list-group">
                                    <a href="#" className="list-group-item">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-2">
                                                <i className="text-danger" data-feather="alert-circle"></i>
                                            </div>
                                            <div className="col-10">
                                                <div className="text-dark">Update completed</div>
                                                <div className="text-muted small mt-1">Restart server 12 to complete the
                                                    update.
                                                </div>
                                                <div className="text-muted small mt-1">2h ago</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-2">
                                                <i className="text-warning" data-feather="bell"></i>
                                            </div>
                                            <div className="col-10">
                                                <div className="text-dark">Lorem ipsum</div>
                                                <div className="text-muted small mt-1">Aliquam ex eros, imperdiet
                                                    vulputate hendrerit et.
                                                </div>
                                                <div className="text-muted small mt-1">6h ago</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-2">
                                                <i className="text-primary" data-feather="home"></i>
                                            </div>
                                            <div className="col-10">
                                                <div className="text-dark">Login from 192.186.1.1</div>
                                                <div className="text-muted small mt-1">8h ago</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-2">
                                                <i className="text-success" data-feather="user-plus"></i>
                                            </div>
                                            <div className="col-10">
                                                <div className="text-dark">New connection</div>
                                                <div className="text-muted small mt-1">Anna accepted your request.</div>
                                                <div className="text-muted small mt-1">12h ago</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="dropdown-menu-footer">
                                    <a href="#" className="text-muted">Show all notifications</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-flag dropdown-toggle" href="#" id="languageDropdown"
                               data-toggle="dropdown">
                                <img src="img\flags\us.png" alt="English"/>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="languageDropdown">
                                <a className="dropdown-item" href="#">
                                    <img src="img\flags\us.png" alt="English" width="20" className="align-middle mr-1"/>
                                        <span className="align-middle">English</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <img src="img\flags\es.png" alt="Spanish" width="20" className="align-middle mr-1"/>
                                        <span className="align-middle">Spanish</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <img src="img\flags\de.png" alt="German" width="20" className="align-middle mr-1"/>
                                        <span className="align-middle">German</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <img src="img\flags\nl.png" alt="Dutch" width="20" className="align-middle mr-1"/>
                                        <span className="align-middle">Dutch</span>
                                </a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#"
                               data-toggle="dropdown">
                                <i className="align-middle" data-feather="settings"></i>
                            </a>

                            <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#"
                               data-toggle="dropdown">
                                <img src="img\avatars\avatar.jpg" className="avatar img-fluid rounded-circle mr-1"
                                     alt="Chris Wood"/> <span className="text-dark">Chris Wood</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="pages-profile.html"><i className="align-middle mr-1"
                                                                                          data-feather="user"></i> Profile</a>
                                <a className="dropdown-item" href="#"><i className="align-middle mr-1"
                                                                         data-feather="pie-chart"></i> Analytics</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="pages-settings.html">Settings & Privacy</a>
                                <a className="dropdown-item" href="#">Help</a>
                                <a className="dropdown-item" href="#">Sign out</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

            <main className="content">
                <div className="container-fluid p-0">

                    <div className="row">
                        <div className="col-lg-6 col-xl-5 d-flex">
                            <div className="w-100">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="card flex-fill">
                                            <div className="card-header">
                                                <span className="badge badge-primary float-right">Today</span>
                                                <h5 className="card-title mb-0">Visitors</h5>
                                            </div>
                                            <div className="card-body my-2">
                                                <div className="row d-flex align-items-center mb-4">
                                                    <div className="col-8">
                                                        <h2 className="d-flex align-items-center mb-0 font-weight-light">
                                                            17.212
                                                        </h2>
                                                    </div>
                                                    <div className="col-4 text-right">
                                                        <span className="text-muted">57%</span>
                                                    </div>
                                                </div>

                                                <div className="progress progress-sm shadow-sm mb-1">
                                                    <div className="progress-bar bg-primary" role="progressbar"
                                                         style={{width: '57%'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card flex-fill">
                                            <div className="card-header">
                                                <span className="badge badge-info float-right">Monthly</span>
                                                <h5 className="card-title mb-0">Real-Time</h5>
                                            </div>
                                            <div className="card-body my-2">
                                                <div className="row d-flex align-items-center mb-4">
                                                    <div className="col-8">
                                                        <h2 className="d-flex align-items-center mb-0 font-weight-light">
                                                            1.856
                                                        </h2>
                                                    </div>
                                                    <div className="col-4 text-right">
                                                        <span className="text-muted">64%</span>
                                                    </div>
                                                </div>

                                                <div className="progress progress-sm shadow-sm mb-1">
                                                    <div className="progress-bar bg-info" role="progressbar"
                                                        ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="card flex-fill">
                                            <div className="card-header">
                                                <span className="badge badge-warning float-right">Annual</span>
                                                <h5 className="card-title mb-0">Bounce</h5>
                                            </div>
                                            <div className="card-body my-2">
                                                <div className="row d-flex align-items-center mb-4">
                                                    <div className="col-8">
                                                        <h2 className="d-flex align-items-center mb-0 font-weight-light">
                                                            2.364
                                                        </h2>
                                                    </div>
                                                    <div className="col-4 text-right">
                                                        <span className="text-muted">82%</span>
                                                    </div>
                                                </div>

                                                <div className="progress progress-sm shadow-sm mb-1">
                                                    <div className="progress-bar bg-warning" role="progressbar"
                                                        ></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card flex-fill">
                                            <div className="card-header">
                                                <span className="badge badge-success float-right">Yearly</span>
                                                <h5 className="card-title mb-0">Activity</h5>
                                            </div>
                                            <div className="card-body my-2">
                                                <div className="row d-flex align-items-center mb-4">
                                                    <div className="col-8">
                                                        <h2 className="d-flex align-items-center mb-0 font-weight-light">
                                                            57.300
                                                        </h2>
                                                    </div>
                                                    <div className="col-4 text-right">
                                                        <span className="text-muted">32%</span>
                                                    </div>
                                                </div>

                                                <div className="progress progress-sm shadow-sm mb-1">
                                                    <div className="progress-bar bg-success" role="progressbar"
                                                         ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-xl-7">
                            <div className="card flex-fill w-100">
                                <div className="card-header">
                                    <div className="card-actions float-right">
                                        <div className="dropdown show">
                                            <a href="#" data-toggle="dropdown" data-display="static">
                                                <i className="align-middle" data-feather="more-horizontal"></i>
                                            </a>

                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className="card-title mb-0">Real-Time</h5>
                                </div>
                                <div className="card-body p-2">
                                    <div id="world_map"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-lg-4 d-flex">
                            <div className="card flex-fill w-100">
                                <div className="card-header">
                                    <div className="card-actions float-right">
                                        <div className="dropdown show">
                                            <a href="#" data-toggle="dropdown" data-display="static">
                                                <i className="align-middle" data-feather="more-horizontal"></i>
                                            </a>

                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className="card-title mb-0">Languages</h5>
                                </div>
                                <table className="table table-striped my-0">
                                    <thead>
                                    <tr>
                                        <th>Language</th>
                                        <th className="text-right">Users</th>
                                        <th className="d-none d-xl-table-cell w-75">% Users</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>en-us</td>
                                        <td className="text-right">735</td>
                                        <td className="d-none d-xl-table-cell">
                                            <div className="progress">
                                                <div className="progress-bar bg-info" role="progressbar"
                                                      aria-valuenow="43" aria-valuemin="0"
                                                     aria-valuemax="100">43%
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>en-gb</td>
                                        <td className="text-right">223</td>
                                        <td className="d-none d-xl-table-cell">
                                            <div className="progress">
                                                <div className="progress-bar bg-info" role="progressbar"
                                                      aria-valuenow="27" aria-valuemin="0"
                                                     aria-valuemax="100">27%
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>fr-fr</td>
                                        <td className="text-right">181</td>
                                        <td className="d-none d-xl-table-cell">
                                            <div className="progress">
                                                <div className="progress-bar bg-info" role="progressbar"
                                                     aria-valuenow="22" aria-valuemin="0"
                                                     aria-valuemax="100">22%
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>es-es</td>
                                        <td className="text-right">132</td>
                                        <td className="d-none d-xl-table-cell">
                                            <div className="progress">
                                                <div className="progress-bar bg-info" role="progressbar"
                                                      aria-valuenow="16" aria-valuemin="0"
                                                     aria-valuemax="100">16%
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>de-de</td>
                                        <td className="text-right">118</td>
                                        <td className="d-none d-xl-table-cell">
                                            <div className="progress">
                                                <div className="progress-bar bg-info" role="progressbar"
                                                      aria-valuenow="15" aria-valuemin="0"
                                                     aria-valuemax="100">15%
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ru-ru</td>
                                        <td className="text-right">98</td>
                                        <td className="d-none d-xl-table-cell">
                                            <div className="progress">
                                                <div className="progress-bar bg-info" role="progressbar"
                                                      aria-valuenow="13" aria-valuemin="0"
                                                     aria-valuemax="100">13%
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4 d-flex">
                            <div className="card flex-fill w-100">
                                <div className="card-header">
                                    <div className="card-actions float-right">
                                        <div className="dropdown show">
                                            <a href="#" data-toggle="dropdown" data-display="static">
                                                <i className="align-middle" data-feather="more-horizontal"></i>
                                            </a>

                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className="card-title mb-0">Mobile / Desktop</h5>
                                </div>
                                <div className="card-body d-flex w-100">
                                    <div className="align-self-center chart">
                                        <canvas id="chartjs-dashboard-bar-devices"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4 d-flex">
                            <div className="card flex-fill">
                                <div className="card-header">
                                    <div className="card-actions float-right">
                                        <div className="dropdown show">
                                            <a href="#" data-toggle="dropdown" data-display="static">
                                                <i className="align-middle" data-feather="more-horizontal"></i>
                                            </a>

                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className="card-title mb-0">Interests</h5>
                                </div>
                                <div className="card-body">
                                    <div className="chart">
                                        <canvas id="chartjs-dashboard-radar"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-lg-5 col-xl-4 d-flex">
                            <div className="card flex-fill w-100">
                                <div className="card-header">
                                    <div className="card-actions float-right">
                                        <div className="dropdown show">
                                            <a href="#" data-toggle="dropdown" data-display="static">
                                                <i className="align-middle" data-feather="more-horizontal"></i>
                                            </a>

                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className="card-title mb-0">Source / Medium</h5>
                                </div>
                                <div className="card-body d-flex">
                                    <div className="align-self-center w-100">
                                        <div className="py-3">
                                            <div className="chart chart-xs">
                                                <canvas id="chartjs-dashboard-pie"></canvas>
                                            </div>
                                        </div>

                                        <table className="table mb-0">
                                            <thead>
                                            <tr>
                                                <th>Source</th>
                                                <th className="text-right">Revenue</th>
                                                <th className="text-right">Value</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td><i className="fas fa-square-full text-primary"></i> Direct</td>
                                                <td className="text-right">$ 2602</td>
                                                <td className="text-right text-success">+43%</td>
                                            </tr>
                                            <tr>
                                                <td><i className="fas fa-square-full text-warning"></i> Affiliate</td>
                                                <td className="text-right">$ 1253</td>
                                                <td className="text-right text-success">+13%</td>
                                            </tr>
                                            <tr>
                                                <td><i className="fas fa-square-full text-danger"></i> E-mail</td>
                                                <td className="text-right">$ 541</td>
                                                <td className="text-right text-success">+24%</td>
                                            </tr>
                                            <tr>
                                                <td><i className="fas fa-square-full text-dark"></i> Other</td>
                                                <td className="text-right">$ 1465</td>
                                                <td className="text-right text-success">+11%</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-7 col-xl-8 d-flex">
                            <div className="card flex-fill">
                                <div className="card-header">
                                    <div className="card-actions float-right">
                                        <div className="dropdown show">
                                            <a href="#" data-toggle="dropdown" data-display="static">
                                                <i className="align-middle" data-feather="more-horizontal"></i>
                                            </a>

                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className="card-title mb-0">Traffic</h5>
                                </div>
                                <table id="datatables-dashboard-traffic" className="table table-striped my-0">
                                    <thead>
                                    <tr>
                                        <th>Source</th>
                                        <th className="text-right">Users</th>
                                        <th className="d-none d-xl-table-cell text-right">Sessions</th>
                                        <th className="d-none d-xl-table-cell text-right">Bounce Rate</th>
                                        <th className="d-none d-xl-table-cell text-right">Avg. Session Duration</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Google</td>
                                        <td className="text-right">1023</td>
                                        <td className="d-none d-xl-table-cell text-right">1265</td>
                                        <td className="d-none d-xl-table-cell text-right text-success">27.23%</td>
                                        <td className="d-none d-xl-table-cell text-right">00:06:25</td>
                                    </tr>
                                    <tr>
                                        <td>Bing</td>
                                        <td className="text-right">504</td>
                                        <td className="d-none d-xl-table-cell text-right">623</td>
                                        <td className="d-none d-xl-table-cell text-right text-danger">66.76%</td>
                                        <td className="d-none d-xl-table-cell text-right">00:04:42</td>
                                    </tr>
                                    <tr>
                                        <td>Twitter</td>
                                        <td className="text-right">462</td>
                                        <td className="d-none d-xl-table-cell text-right">571</td>
                                        <td className="d-none d-xl-table-cell text-right text-success">31.53%</td>
                                        <td className="d-none d-xl-table-cell text-right">00:08:05</td>
                                    </tr>
                                    <tr>
                                        <td>Pinterest</td>
                                        <td className="text-right">623</td>
                                        <td className="d-none d-xl-table-cell text-right">770</td>
                                        <td className="d-none d-xl-table-cell text-right text-danger">52.81%</td>
                                        <td className="d-none d-xl-table-cell text-right">00:03:10</td>
                                    </tr>
                                    <tr>
                                        <td>Facebook</td>
                                        <td className="text-right">812</td>
                                        <td className="d-none d-xl-table-cell text-right">1003</td>
                                        <td className="d-none d-xl-table-cell text-right text-success">24.83%</td>
                                        <td className="d-none d-xl-table-cell text-right">00:05:56</td>
                                    </tr>
                                    <tr>
                                        <td>DuckDuckGo</td>
                                        <td className="text-right">693</td>
                                        <td className="d-none d-xl-table-cell text-right">856</td>
                                        <td className="d-none d-xl-table-cell text-right text-success">37.36%</td>
                                        <td className="d-none d-xl-table-cell text-right">00:09:12</td>
                                    </tr>
                                    <tr>
                                        <td>GitHub</td>
                                        <td className="text-right">713</td>
                                        <td className="d-none d-xl-table-cell text-right">881</td>
                                        <td className="d-none d-xl-table-cell text-right text-success">38.09%</td>
                                        <td className="d-none d-xl-table-cell text-right">00:06:19</td>
                                    </tr>
                                    <tr>
                                        <td>Direct</td>
                                        <td className="text-right">872</td>
                                        <td className="d-none d-xl-table-cell text-right">1077</td>
                                        <td className="d-none d-xl-table-cell text-right text-success">32.70%</td>
                                        <td className="d-none d-xl-table-cell text-right">00:09:18</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            <footer className="footer">
                <div className="container-fluid">
                    <div className="row text-muted">
                        <div className="col-6 text-left">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a className="text-muted" href="#">Support</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-muted" href="#">Help Center</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-muted" href="#">Privacy</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-muted" href="#">Terms of Service</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 text-right">
                            <p className="mb-0">
                                &copy; 2019 - <a href="index.html" className="text-muted">AppStack</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </>
)
