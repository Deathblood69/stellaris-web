import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import React from 'react'

export const ListItems = ({
  array = [],
  keyTexte = '',
  keyIcone = '',
  isImageIcon = false,
  onClick = () => {},
}) => (
  <List>
    {array.map((action, index) => (
      <ListItem key={index} disablePadding>
        <ListItemButton onClick={() => onClick(action[keyTexte])}>
          {isImageIcon ? (
            <img
              alt={keyIcone}
              height={'30px'}
              src={action[keyIcone]}
              style={{paddingRight: '25px'}}
            />
          ) : (
            <ListItemIcon>{action[keyIcone]}</ListItemIcon>
          )}
          <ListItemText primary={action[keyTexte]} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
)
