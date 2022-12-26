import Backdrop from '@mui/material/Backdrop'
import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import { CSSObject, styled, Theme } from '@mui/material/styles'

import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { makeStyles } from '@mui/styles'
import classNames from 'classnames'
import { useCallback, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { COLORS } from '../constants/colors'
import { MAIN_NAVIGATION } from '../constants/mainNavigation'
import { useUser } from '../hooks/useUser'
import { UserRow } from './user/UserRow'

const drawerWidth = 388

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const useStyles = makeStyles({
  activeMenuItem: {
    backgroundColor: `${COLORS.primary.main}`,
  },
  menuItem: {
    marginBottom: 32,
    '&:hover': {
      backgroundColor: `${COLORS.primary.main}`,
    },
  },
  listItemText: {
    marginLeft: 32,
    '& span': {
      fontSize: 20,
      fontWeight: 600
    }
  }
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(17.5)} + 1px)`,
  },
})

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  '& > .MuiPaper-elevation': {
    boxSizing: 'border-box',
    padding: `${theme.spacing(7.75)} ${theme.spacing(4.75)}`,
  },

  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  const { push } = useHistory()
  const { pathname: currentPath } = useLocation()

  const { fullName } = useUser()
  const toggle = () => {
    setOpen((prev) => !prev)
  }

  const navigateToPath = useCallback(
    (path: string) => () => {
      push(path)
    },
    [push],
  )

  return (
    <>
      <Drawer onMouseEnter={toggle} onMouseLeave={toggle} variant="permanent" open={open}>
        <UserRow visible={!open} fullName={fullName} />
        <List>
          {MAIN_NAVIGATION.map(({ icon, label, path }, index) => {
            const active = path === currentPath

            return (
              <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  onClick={navigateToPath(path)}
                  className={classNames(classes.menuItem, active ? classes.activeMenuItem : '')}
                  sx={{
                    display: 'flex',
                    borderRadius: open ? 5 : '50%',
                    height: 75,
                    width: !open ? 75 : 'auto',
                    justifyContent: open ? 'initial' : 'center',
                    alignItems: 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img alt={label} src={icon} />
                  </ListItemIcon>
                  {open && <ListItemText className={classes.listItemText} primary={label} sx={{ opacity: open ? 1 : 0 }} />}
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      </Drawer>
      <Backdrop sx={{ backgroundColor: 'rgba(0,0,0,0.8)', zIndex: (theme: Theme) => theme.zIndex.drawer - 1 }} open={open} />
    </>
  )
}
export default Sidebar
