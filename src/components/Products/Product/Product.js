import React from "react";

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";


import './../../../scss/styles.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    height: '350px',
  },
  media: {
    height: "200px",
    paddingTop: "56,25%",
    
  },
  cardActions: {
    display: "flex",
    position: 'relative',
    top: '-30px',
    justifyContent: "flex-end",
    fontSize: '20px',
 
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "20px",
  },
  cardInfo: {
    fontSize: '12px',
  }
}));

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
      />
      <CardContent className="card">
        <div className={classes.cardContent}>
          <Typography className="text-info">
            {product.name}
          </Typography>
          <Typography variant="h6">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
        className={classes.cardInfo}
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
              <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
      </CardContent>

    </Card>
  );
};

export default Product;
