import './App.css';
import Navbar from './component/Navbar';
import ToolBar from './component/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import ScienceIcon from '@mui/icons-material/Science';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CssIcon from '@mui/icons-material/Css';
import BrushIcon from '@mui/icons-material/Brush';
import AddIcon from '@mui/icons-material/Add';

function App() {
  return (
    <div className="App">
      <Navbar />
        <ToolBar />
        <div className="content">
            <div className="c-top">
                <ul className="c-top-list">
                    <li className="c-top-list-item text">Gmail</li>
                    <li className="c-top-list-item text">Image</li>
                    <li className="c-top-list-item icon"><ScienceIcon /></li>
                    <li className="c-top-list-item icon"><AppsIcon /></li>
                    <li className="c-top-list-item icon"><AccountCircleIcon /></li>
                </ul>
            </div>
            <div className="c-center">
                <div className="c-main-title">
                    <h1>Browser</h1>
                    <p>by Abdulaziz</p>
                </div>
                <div className="c-search">
                    <SearchIcon />
                    <input type="text" placeholder="Search Google or type URL" />
                    <KeyboardVoiceIcon />
                    <AddAPhotoIcon />
                </div>
                <div className="c-bottom">
                    <div className="card">
                        <div className="card-icon">
                            <YouTubeIcon className="socical-icons" id="youtube"/>
                        </div>
                        <p>Youtube</p>
                    </div>
                    <div className="card">
                        <div className="card-icon">
                            <CssIcon className="socical-icons" id="style"/>
                        </div>
                        <p>Tailwind</p>
                    </div>
                    <div className="card">
                        <div className="card-icon">
                            <BrushIcon className="socical-icons" id="canva"/>
                        </div>
                        <p>Canva</p>
                    </div>
                    <div className="card">
                        <AddIcon className="socical-icons"/>
                        <p className="card-create">Add shortcut</p>
                    </div>
                </div>
                <div className="c-bottom-tool">
                    <EditIcon />
                    <p>Customize Chrome</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
