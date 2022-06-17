import { Add, Settings } from "@mui/icons-material";
import { Button, Typography, styled } from "@mui/material";

function App() {
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.otherColor.main,
    color: "#fff",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  }));

  return (
    <div>
      <Button variant='text'>Text</Button>
      <Button
        startIcon={<Settings />}
        variant='contained'
        color='otherColor'
        size='small'
      >
        Settings
      </Button>
      <Button
        startIcon={<Add />}
        variant='contained'
        color='success'
        size='small'
      >
        Add New Post
      </Button>
      <Button variant='outlined'>Outlined</Button>
      <Typography variant='h1' component='p'>
        This uses h1 style, but it is a P tag
      </Typography>
      <BlueButton>My Button</BlueButton>
      <BlueButton>Another Button</BlueButton>
    </div>
  );
}

export default App;
