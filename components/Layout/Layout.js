import { createTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Link, ThemeProvider, Toolbar, Typography ,Container} from "@mui/material";
import Head from "next/head";
import NextLink from 'next/link';
import classes from '../../utils/classes';


const Layout = ({title,description,children}) => {
    const theme  = createTheme({
        typography:{
            components:{
                MuiLink:{
                    defaultProps:{
                        underline : 'hover',
                    }
                }
            },
            h1:{
                fontSize: '1.6rem',
                fontWeight: 400,
                margin : '1rem 0'
            },
            h2:{
                fontSize: '1.4rem',
                fontWeight: 400,
                margin: '1rem 0',
            },
            palette : {
                mode :'light',
                primary :{
                    main: '#f0c000'
                },
                secondary : {
                    main : '#208080'
                }
            }
        }
    })

    return (
        <>
          <Head>
            <title>
                {title ? `${title}  Ecommerce` : "Sandrao - Ecommerce"}
            </title>
            {description && <meta name="description" content={description}></meta>}
          </Head>
          <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AppBar position="static" sx={classes.appbar} >
                <Toolbar sx={classes.toolbar}>
            
                    <Link href="/" passHref>
                        <Typography sx={classes.brand}>Ecommerce</Typography>
                    </Link>
  
                </Toolbar>
            </AppBar>
            <Container component="main" sx={classes.main}>
                <div>
                    {children}
                </div>
            </Container>
            <Box componet="footer" sx={classes.footer}>
                <Typography> 
                    Todos Direitos reservado. Lissandro Miranda Rocha
                </Typography>
            </Box>
          </ThemeProvider>

        </>
    )
}

export default Layout;