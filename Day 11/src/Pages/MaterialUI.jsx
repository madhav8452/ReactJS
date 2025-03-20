import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

function MaterialUI(){
    // Pagination
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    //Progress-bar

    const [progress, setProgress] = React.useState(40);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="w-[100%] p-10 flex flex-col items-center">
            <Button variant="contained" style={{
                backgroundColor : 'black',
                width : '200px'
            }}>Hello world</Button>
            <DeleteIcon className='mt-5 cursor-pointer'/> 

            <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange} className='border border-black mt-5 rounded'>
                <BottomNavigationAction
                    label="Recents"
                    value="recents"
                    icon={<RestoreIcon />}
                />
                <BottomNavigationAction
                    label="Favorites"
                    value="favorites"
                    icon={<FavoriteIcon />}
                />
                <BottomNavigationAction
                    label="Nearby"
                    value="nearby"
                    icon={<LocationOnIcon />}
                />
                <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
            </BottomNavigation>

            <Stack spacing={2} className='mt-5'>
                <Pagination count={10} color="primary" />
                <Pagination count={10} color="secondary" />
            </Stack>

            <Box className='mt-5'>
                <TextField
                    label="Controlled"
                    style={{margin : '5px'}}
                />
                <TextField
                    label="Uncontrolled"
                    style={{margin : '5px'}}
                />
            </Box>

            <Stack sx={{ width: '50%', marginTop : '5px' }} spacing={2}>
                <Alert variant="filled" severity="success">
                    This is a filled success Alert.
                </Alert>
                <Alert variant="filled" severity="info">
                    This is a filled info Alert.
                </Alert>
                <Alert variant="filled" severity="warning">
                    This is a filled warning Alert.
                </Alert>
                <Alert variant="filled" severity="error">
                    This is a filled error Alert.
                </Alert>
            </Stack>

            <Box sx={{ position: 'relative', display: 'inline-flex', marginTop : '50px' }}>
                <CircularProgress variant="determinate" value={progress}/>
                <Box
                    sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}
                >
                <Typography
                    variant="caption"
                    component="div"
                    sx={{ color: 'text.secondary' }}
                >
                    {`${Math.round(progress)}%`}
                </Typography>
                </Box>
            </Box>
        </div>
    )
}

export default MaterialUI