import PerfectScrollBar from "react-perfect-scrollbar";
import {
	TableBody,
	TableCell,
	TableHead,
	Card,
	Box,
	Table,
	TableRow,
} from "@mui/material";

const CommitList = (props) => {

	let commitList = props.commitList;

	return(
		<Card>
			<PerfectScrollBar>
			<Box sx={{ minWidth: 1050 }}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Id</TableCell>
								<TableCell>Description</TableCell>
								<TableCell>Autor</TableCell>
								<TableCell>Date</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{commitList.map((commit) => (
								<TableRow
									hover
									key={commit.sha}									
								>
									<TableCell>{commit.sha}</TableCell>									
									<TableCell>{commit.commit.message}</TableCell>
									<TableCell>{commit.commit.author.name}</TableCell>
									<TableCell>{commit.commit.author.date}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</Box>

			</PerfectScrollBar>
		</Card>
	);
};

export default CommitList;
