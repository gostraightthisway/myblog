import Layout from "components/layout/Layout";
import Social from "components/Social";

import { Container, Grid, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  snsIcon: {
    width: "30px",
    height: "30px",
    // color: theme.palette.primary.main,

    [theme.breakpoints.down("xs")]: {
      width: "25px",
      height: "25px",
    },
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
  avator: {
    width: "8em",
    height: "8em",
    boxShadow: "0px 0px 10px 1px #b2b2b28f",
  },
}));

const About = () => {
  const classes = useStyles();
  // use ure name
  const name = 'gostraysheep';
  // use your picture
  const avatar =
    "sheep.jpg?h=250";
  return (
    <Layout
      // type your page title and page description.
      title=" 中の人 | 迷える羊の突撃ブログ"
      description=" "
    >
      <Container maxWidth="md">
        <Grid container direction="column" spacing={8}>
          <Grid item>
            <Typography variant="h1" align="center" gutterBottom>
              中の人
            </Typography>
            <Typography variant="h2" align="center">
              Hello my name is {name}.
            </Typography>
          </Grid>
          <Grid item container spacing={2} alignItems="center">
            <Grid
              item
              container
              md={4}
              direction="column"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                {/* use your picture */}
                <Avatar alt="avatar" src={avatar} className={classes.avator} />
              </Grid>
              <Grid item>
                <Typography variant="h3">{name}</Typography>
              </Grid>
              <Social color />
            </Grid>
            <Grid item container md={8}>
              <Typography variant="body1">
                {/* your introduction */}
                <strong>進め！迷える羊</strong>
                <br />
                迷える羊がいろいろ試してみた記録.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default About;
