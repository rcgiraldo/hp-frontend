import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";

import CommitDetails from "../../components/commit/CommitDetails";
import { getCommit } from "../../services/commitService";
import { useParams } from "react-router-dom";

const Commit = (props) => {
  const { sha, ...others } = props;

  const [commit, setCommit] = useState({
    name: "",
    commit: {
      author: {
        name: "",
        email: "",
        date: "",
      },
    },
    message: "",
    url: "",
    stats: {
      additions: 0,
      deletions: 0,
    },
  });
  const params = useParams();
  //let id = this.props.match.params.sha
  //console.log("in commit page:" + id)
  console.log("test commit 1");

  console.log(params)

  let id = params.sha

    console.log("in commit page parms:" + id);

  useEffect(() => {
    

    let list = getCommit(id);

    list.then((res) => {
      console.log("testing get commit");
      console.log(res);
      setCommit(res);
    });
  }, []);

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3}>
            <div>
              <Typography variant="h4">Commit</Typography>
            </div>
            <div>
              <Grid container spacing={3}>
                <Grid xs={12} md={6} lg={8}>
                  <CommitDetails commit={commit} />
                </Grid>
              </Grid>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Commit;
