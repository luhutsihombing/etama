import React from 'react'
import Nav from '../../components/Common/Header'
import LeftBar from '../../components/Common/Sidebar/LeftBar'

export default ({children}) => {

    console.log('render Main Admin')

    return (
        <div>
            <div className="wrapper">
                <LeftBar />
                {children}
            </div>
        </div>
    )
}

