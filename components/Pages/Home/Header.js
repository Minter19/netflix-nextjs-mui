import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { AppBar, Button, Grid, MenuItem, Select, TextField, Toolbar, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Header = () => {
  return (
    <Box sx={{borderBottom: `8px solid ${grey[900]}`}}>
        <AppBar
            sx={{
                backgroundColor:'transparent',
                padding: '25px 20px',
                position: 'absolute'
            }}
            elevation ={0}
        >
            <Toolbar>
                <Grid container alignItems='center' spacing={2}>
                    <Grid item xs>
                        <Image 
                            src='/__images/netflix.svg'
                            height= '45px'
                            width= '167px' 
                            layout="intrinsic"
                            alt="netflix-logo"
                            />
                    </Grid>
                    <Grid item xs='auto'>
                        <Select name="lang" variant="outlined" size="small" defaultValue="EN" 
                            sx={{
                                borderWidth: '2px',
                                borderStyle: 'solid',
                                borderColor: 'common.white',
                                color:'common.white',
                                '& .MuiSelect-icon':{
                                    color: 'common.white'
                                },
                                '& .MuiOutlinedInput-notchedOutline':{
                                    border:'none'
                                }

                            }}
                        >
                            <MenuItem value="ID">Bahasa Indonesia</MenuItem>
                            <MenuItem value="EN">English</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs='auto'>
                        <Button color='primary' variant='contained'>SIGN IN</Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
      <Box 
      sx={{
        position: 'relative',
        height: '745px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&::after' : {
            position: 'absolute',
            content: '""',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            background: 'rgba(0, 0, 0, 0.4)',
            backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.) 0 , rgba(0, 0, 0, 1) 60% , rbga(0, 0, 0, 1) 100%)'
        } 
      }}
      >
        <Image
          priority
          src="/__images/backdrop.jpg"
          layout="fill"
          alt="backdrop-netflix"
        />
        <Container maxWidth='md' sx={{position: 'relative', zIndex:'1000'}}>
            <Typography 
                variant="h1" 
                component='h1' 
                color='common.white'
                fontWeight='600'
                textAlign='center'
                >
                Unlimited Movies, TV Shows, and More.
            </Typography>
            <Typography 
                variant="h5" 
                component='p' 
                color='common.white'
                fontWeight='600'
                textAlign='center'
                gutterBottom
                >
                Watch anywhere. Cancel anytime.
            </Typography>
            <Typography 
                variant="h6" 
                component='p' 
                color='common.white'
                fontWeight='600'
                textAlign='center'
                sx={{
                    my: 3
                }}
                >
                Ready to watch? Enter your email to create or restart your membership.
            </Typography>

            <Grid container>
                <Grid item xs>
                    <TextField 
                        variant="filled" 
                        label="Email Address"
                        fullWidth 
                        sx={{bgcolor: 'common.white'}}/>
                </Grid>
                <Grid item xs='auto'>
                    <Button 
                        variant="contained" 
                        size="large"
                        color='primary'
                        sx={{height:'100%', borderRadius: '2px'}}>
                        Get Started &gt;
                    </Button>
                </Grid>
            </Grid>
           
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
