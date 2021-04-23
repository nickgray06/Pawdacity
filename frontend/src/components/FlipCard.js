import ReactCardFlip from 'react-card-flip';
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactStars from "react-rating-stars-component";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
});

export default function FlipCard({walker, updateWalker}) {
  
  const ratingChanged = (newRating) => {
    console.log(newRating)
    fetch(`http://localhost:3000/walkers/${walker.id}/add_review`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({score: newRating})
    })
      .then(resp => resp.json())
      .then(walker => updateWalker(walker))
  };
  const { name, image, quote, avg_rev } = walker
  const [ isFlipped, setIsFlipped ] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          height="300"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
              <div onClick={handleClick}>
                {name}
              </div>
              <div >
                "{quote}"
              </div>
            </ReactCardFlip>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <ReactStars
            value={avg_rev}
            count={5}
            onChange={ratingChanged}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button onClick={handleClick} size="small" color="primary">
          Learn More
        </Button>
        <Button size="small" color="primary" href="mailto:someone@yoursite.com">
        Contact Me
        </Button>
      </CardActions>
    </Card>
  );
}