import { Avatar, Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'

import React from 'react'

export type IUserRowProps = {
  fullName: string
  avatarSrc?: string
  visible?: boolean
}

const useStyles = makeStyles({
  fullName: {
    marginLeft: '16px !important',
    fontSize: '22px !important',
    fontWeight: '600 !important'
  }
})

const UserRow: React.FC<IUserRowProps> = ({ fullName, avatarSrc, visible }) => {
  const classes = useStyles()

  return (
    <Box display="flex" alignItems="center" style={{ visibility: visible ? 'hidden' : 'visible' }}>
      <Avatar alt={fullName} src={avatarSrc} sx={{ width: 60, height: 60 }} />
      <Typography className={classes.fullName}>{fullName}</Typography>
    </Box>
  )
}

export { UserRow }
