import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import logo from '../../images/logo.svg'

/**
 * Composant permettant d'afficher une tuile avec une image
 * @param titre
 * @param description
 * @param image
 * @param actions
 * @returns {JSX.Element}
 * @constructor
 */
export const MediaCard = ({
  titre = 'Titre par défaut',
  description = 'Decription par défaut',
  image = {path: logo, alt: 'Logo'},
  actions = {
    justifyContent: 'center',
    elements: [
      <Button size="small">Action 1</Button>,
      <Button size="small">Action 2</Button>,
    ],
  },
}) => (
  <Card sx={{maxWidth: 345}}>
    <CardMedia
      height={144}
      component="img"
      image={image.path}
      alt={image.alt}
    />
    <CardContent>
      <Typography gutterBottom variant="h5">
        {titre}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <CardActions sx={{justifyContent: actions.justifyContent}}>
      {actions.elements.map((bouton, index) => (
        <React.Fragment key={index}>{bouton}</React.Fragment>
      ))}
    </CardActions>
  </Card>
)
