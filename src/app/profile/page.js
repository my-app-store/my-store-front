'use client'

import Typography from '@mui/material/Typography';
import * as React from 'react'
import Button from '@mui/material/Button'
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import InputAdornment from '@mui/material/InputAdornment'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import VisibilityOutlined from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlined from '@mui/icons-material/VisibilityOffOutlined'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'


const Page = () => {

    return (
        <div>
            <div className='max-w-screen-lg flex flex-row items-center justify-between mx-auto'>
                <div className='py-8 flex flex-col'>
                    <span className='text-2xl font-semibold mb-2'>Charlotte Dupont</span>
                    <div className='flex flex-row'>
                        <LocationOnIcon fontSize="small" />
                        <span className='ml-1 text-sm'>12 Rue Anatole France, 92000 Nanterre</span>
                    </div>
                    <div className='flex flex-row'>
                        <MailIcon fontSize="small" />
                        <span className='ml-1 text-sm'>charlotte@gmail.com</span>
                    </div>
                </div>
                <Button className='w-fit h-fit' variant="outlined">Edit profile</Button>
            </div>
            <div className="bg-slate-100 min-h-screen">
                <div className='max-w-screen-lg mx-auto flex flex-col'>
                    <span className='text-3xl font-semibold mt-12 mb-8 text-start'>My wishlist</span>
                </div>
            </div>
        </div>
    );
}

export default Page;
