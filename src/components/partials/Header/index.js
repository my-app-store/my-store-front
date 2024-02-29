import * as React from 'react';
import Link from 'next/link';
import NavMenu from "@/components/UI/NavMenu";
import menu from "@/data/menu.json";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -2,
    top: 6,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Index = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <header className="bg-white border-b border-color-black py-3">
            <ul className="flex pl-6 pr-6 items-center justify-between">
                <li className="flex lg:flex-1">
                    <Link href="/">
                        <span className="text-2xl font-bold">mystore.</span>
                    </Link>
                </li>
                <li className='flex flex-row'>
                    <NavMenu menu={menu} color="grey" />
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <div className='flex flex-row items-center'>
                        <IconButton aria-label="cart" className="ml-6 mr-2">
                        <StyledBadge badgeContent={7} color="info">
                            <FavoriteBorderIcon />
                        </StyledBadge>
                        </IconButton>
                        <IconButton aria-label="cart" className="mx-2">
                        <StyledBadge badgeContent={4} color="info">
                            <ShoppingCartIcon />
                        </StyledBadge>
                        </IconButton>
                        <IconButton 
                        size="large"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                        <AccountCircleOutlinedIcon size="large" color="black" fontSize="16" />
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
                        <MenuItem onClick={handleClose}><Link href='/profile'>Profile</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link href='/login'>Login</Link></MenuItem>
                        <MenuItem onClick={handleClose}>Register</MenuItem>
                        </Menu>
                    </div>
                </li>
            </ul>
        </header>
    );
}

export default Index;