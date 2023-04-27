import React, { ReactElement } from 'react';
import { styled } from '@mui/material/styles';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  marginLeft: 0,
  width: '100%',

  position: 'relative',
  borderRadius: '30px',
  backgroundColor: theme.palette.common.white,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& svg': {
      color: 'rgba(105, 181, 186, 1)',
  }
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(2em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color: 'rgba(105, 181, 186, 1)',
    [theme.breakpoints.up('sm')]: {
      width: '130px',
      '&:focus': {
        width: '150px',
      },
    },
  },
}));

export type ISearchBarProps = {}

const SearchBar = (props: ISearchBarProps): ReactElement => {
  return (
      <Search>
          <SearchIconWrapper>
              <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
              placeholder="Поиск..."
              inputProps={{ 'aria-label': 'search' }}
          />
      </Search>
  );
}

export default SearchBar
