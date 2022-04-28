import React,{useState, useEffect} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { createSvgIcon } from '@mui/material/utils';

const HomeIcon = createSvgIcon(
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  'Home',
);

const basicSettings = {subTitles: ['카운터', '계산기', 'BMI', '게시판'], urls: ["/basic/counter","/basic/calc","/basic/bmi", '/board/list']};

export default function Nav(){
  const [imageInfos, setImageInfos] = useState([]);
  const [userUrls, setUserUrls] = useState({subTitles:[], urls:[]});

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    const loginUser = localStorage.getItem("loginUser")
    if (loginUser === null) {
      setUserUrls({subTitles: ['회원가입', '로그인'], urls: ["/user/join","/user/login"]})
      setImageInfos({imageUrl: 'https://as2.ftcdn.net/v2/jpg/01/85/61/65/1000_F_185616556_uCc1J5d5GNfRH6ErgP1G8x8ORLeG25en.jpg', imageTitle: 'sign'})
    } else {
      setUserUrls({subTitles: ["프로필", "정보수정", "로그아웃" , "회원탈퇴"], urls: ["/user/profile", "/user/modifyUser", "/user/logout", "/user/delUser"]})
      setImageInfos({imageUrl: 'https://www.w3schools.com/howto/img_avatar.png', imageTitle: 'users'})
    }
  }, [])

  // const basicUrls = ["/basic/counter","/basic/calc","/basic/bmi"]
  // const basicSubTitle = ["카운터","계산기","BMI", "게시판"]
  // const todoUrls = ["/todo/addTodo","/todo/getTodos","/todo/modifyTodo","/todo/removeTodo"]
  // const todoSubTitle = ["할일등록","할일목록","할일수정","할일삭제"]
  // const gameUrls = ["/game/addGame","/game/getGames","/game/modifyGame","/game/removeGame"]
  // const gameSubTitle = ["게임등록","게임목록","게임수정","게임삭제"]
  // const teamUrls = ["/team/addTeam","/team/getTeams","/team/modifyTeam","/team/removeTeam"]
  // const teamSubTitle = ["팀등록","팀목록","팀수정","팀삭제"]
  // const boardUrls = ["/board/writeArticle","/board/getArticles","/board/modifyArticle","/board/removeArticle"]
  // const boardSubTitle = ["글등록","글목록","글수정","글삭제"]
  
  return (
    <AppBar position="static" style={{marginBottom:"70px"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
            <Box sx={{ '& > :not(style)': { m: 2, }, }}>
              <a href='/'><HomeIcon color="primary" sx={{ my: 0, color: 'white', display: 'block' }}/></a>
            </Box>
          </Typography>
          
          <Box sx={{ flexGrow: 1, color: 'white', display: { xs: 'none', md: 'flex' } }}>
            {basicSettings.urls.map((urls, i) => (
              <a href={urls} style = {{textDecoration: 'none'}}><Button key={i} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }} >
                {basicSettings.subTitles[i]} </Button>
              </a>))}
          </Box>
          

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={imageInfos.imageTitle}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={imageInfos.imageUrl}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: 'top', horizontal: 'right', }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right', }}
              open={Boolean(anchorElUser)}
            >
              {userUrls.urls.map((urls, i) => (
                <MenuItem key={i} >
                <a href={urls}><Typography textAlign="center" onClick={handleCloseUserMenu}>{userUrls.subTitles[i]}</Typography></a>
                </MenuItem> ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}