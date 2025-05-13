import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ReplayIcon from '@mui/icons-material/Replay';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import GoogleIcon from '@mui/icons-material/Google';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../style/Toolbar.css';
import Dashboard from '@mui/icons-material/DashboardCustomize';

const Toolbar = () => {
    return (
        <div className="toolbar-wrapper">
            <div className="m-top">
                <div className="m-left">
                    <ArrowBackIcon className="arrow"/>
                    <ArrowForwardIcon className="arrow"/>
                    <ReplayIcon className="nav"/>
                    <HomeFilledIcon className="nav"/>
                </div>
                <div className="m-center">
                    <GoogleIcon className="google-icon"/>
                    <input type="text" placeholder="Search Google or type URL" className="main-input"/>
                    <ZoomOutIcon />
                    <StarBorderIcon />
                </div>
                <div className="m-right">
                    <AccountCircleIcon className="for-hover"/>
                    <MoreVertIcon className="for-hover"/>
                </div>
            </div>
            <div className="m-bottom">
                <Dashboard />
            </div>
        </div>
    )
}
export default Toolbar
