import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GoogleIcon from '@mui/icons-material/Google';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import Close from '@mui/icons-material/Close';
import '../style/Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="left">
                <div className="main-chevron">
                    <ExpandMoreIcon />
                </div>
                <div className="tabs">
                    <div className="new-tab">
                        <GoogleIcon />
                        <p>New Tab</p>
                    </div>
                    <CloseIcon className="close-tab"/>
                </div>
                <div className="create-tab">
                    <AddIcon />
                </div>
            </div>
            <div className="right">
                <div className="main-tab-group">
                    <div className="tab-tool">
                        <RemoveIcon />
                    </div>
                    <div className="tab-tool">
                        <LibraryAddIcon />
                    </div>
                    <div className="tab-tool" id="close">
                        <Close />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar
