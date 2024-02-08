import * as React from 'react';
import Link from "next/link";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Index = ({menu, color}) => {

  const colors = {
    scale: "scale-500",
    black: "black",
    grey: "gray-900",
    white: "white"
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav>
      <ul className="flex p-6 items-center justify-between lg:gap-x-12">
        {
          menu.map((item, index) => (
            <li key={index} className="lg:flex-1">
              <Link 
                href={item.path} 
                className={`text-md font-normal leading-6 text-${colors[color]} text-base hover:text-slate-500`}>
                {item.name}
              </Link>
            </li>
          ))
        }
        <li className='flex flex-row items-center'>
          <IconButton 
            size="large"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
            <AccountCircleOutlinedIcon color="black" fontSize="inherit" />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}><Link href='/login'>Login</Link></MenuItem>
            <MenuItem onClick={handleClose}>Register</MenuItem>
          </Menu>
        </li>
      </ul>
    </nav>
  );
}

export default Index;
