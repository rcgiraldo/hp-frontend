import { useEffect, useState } from "react";
import { getCommits } from "../../services/commitService";
import { Box, Container } from "@mui/material";

import CommitList from "../../components/commit/CommitList";



const Commits = () => {
  const [commitList, setCommitList] = useState([]);
  

  useEffect(() => {
    let list = getCommits();

    list.then((res) => {
      console.log("list of commits");
      console.log(res);
      setCommitList(res);
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
		<Container maxWidth={false}>
			<Box sx={{ mt: 3}} >
				<CommitList commitList={commitList} />
			</Box>

		</Container>
	  </Box>
    </>
  );
};

export default Commits;
