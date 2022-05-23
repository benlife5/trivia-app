import {useState, useEffect} from "react";
import './App.css';
import {decode} from 'html-entities';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Icon from '@material-ui/core/Icon';
import Link from '@material-ui/core/Link';

/**
 * props: articles data
 */
function ArticlesCard(props) {
  return (
    <Card variant="outlined" className="question-card">
      <CardContent>
        <DialogTitle>Top 5 Articles of New York Times</DialogTitle>
          {props.articles !== undefined &&
            props.articles.results !== undefined && (
              <>
                <Link href={props.articles.results[0].url} underline="hover">
                  Article 1
                </Link>
                <br></br>
                <Link href={props.articles.results[1].url} underline="hover">
                  Article 2
                </Link>
                <br></br>
                <Link href={props.articles.results[2].url} underline="hover">
                  Article 3
                </Link>
                <br></br>
                <Link href={props.articles.results[3].url} underline="hover">
                  Article 4
                </Link>
                <br></br>
                <Link href={props.articles.results[4].url} underline="hover">
                  Article 5
                </Link>
              </>
            )}
      </CardContent>
    </Card>
  );
}

export default ArticlesCard;