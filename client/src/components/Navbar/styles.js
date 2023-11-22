import { makeStyles } from '@material-ui/core/styles'
import { deepPurple } from '@material-ui/core/colors'

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    // Media query for smaller screens
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column', // Stack elements vertically on smaller screens
      alignItems: 'center', // Center align items on smaller screens
      padding: '10px', // Adjust padding for smaller screens
    },
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    height: '120px',
    // Responsive styling for the image
    [theme.breakpoints.down('sm')]: {
      height: '80px',
    },
  },
  logo: {
    // Responsive styling for the image
    [theme.breakpoints.down('sm')]: {
      height: '70px',
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column', // Stack elements vertically on smaller screens
      alignItems: 'center', // Center align items on smaller screens
      padding: '10px', // Adjust padding for smaller screens
    },
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  button: {
    // Add any specific styling for the button
    [theme.breakpoints.down('sm')]: {
      marginTop: '10px', // Add space above the button on smaller screens
    },
  },
}))
