import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  TextField,
  ListItem,
  ListItemText,
  List,
} from "@mui/material";

const CommitDetails = (props) => {
  let commit = props.commit;
  //let id = this.props.match.params.sha
  //console.log("in commit page:" + id)

  console.log("commit  component");
  console.log(commit);

  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              pb: 3,
            }}
          >
            <Grid container>
              <List>
                <ListItem>
                  <Typography sx={{ fontWeight: "bold" }}>sha:</Typography>
                </ListItem>
                <ListItem>
                  <Typography>{commit.sha}</Typography>
                </ListItem>

                <ListItem>
                  <Typography sx={{ fontWeight: "bold" }}>Autor:</Typography>
                </ListItem>
                <ListItem>
                  <Typography>{commit.commit.author.name}</Typography>
                </ListItem>

                <ListItem>
                  <Typography sx={{ fontWeight: "bold" }}>Email:</Typography>
                </ListItem>
                <ListItem>
                  <Typography>{commit.commit.author.email}</Typography>
                </ListItem>

                <ListItem>
                  <Typography sx={{ fontWeight: "bold" }}>Fecha:</Typography>
                </ListItem>
                <ListItem>
                  <Typography>{commit.commit.author.date}</Typography>
                </ListItem>

                <ListItem>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Descripción:
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>{commit.commit.message}</Typography>
                </ListItem>

                <ListItem>
                  <Typography sx={{ fontWeight: "bold" }}>Url:</Typography>
                </ListItem>
                <ListItem>
                  <Typography>{commit.url}</Typography>
                </ListItem>

                <ListItem>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Adiciones:
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>{commit.stats.additions}</Typography>
                </ListItem>

                <ListItem>
                  <Typography sx={{ fontWeight: "bold" }}>Borrados:</Typography>
                </ListItem>
                <ListItem>
                  <Typography>{commit.stats.deletions}</Typography>
                </ListItem>
              </List>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
      </Card>
    </>
  );
};

export default CommitDetails;
