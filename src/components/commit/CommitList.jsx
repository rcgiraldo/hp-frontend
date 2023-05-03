import PerfectScrollBar from "react-perfect-scrollbar";
import { useNavigate } from 'react-router-dom';
import {
	TableBody,
	TableCell,
	TableHead,
	Card,
	Box,
	Table,
	TableRow,
} from "@mui/material";

import VisibilityIcon from '@mui/icons-material/Visibility';

const CommitList = (props) => {
	const navigate = useNavigate();

	let commitList = props.commitList;

	let commitObject = {
		name: "",
		commit: {
			author: {
				name: "",
				email: "",
				date: ""
			}

		},
		message: "",
		url: "",
		stats: {
			additions: 0,
			deletions: 0
		}
	}

	const viewDetails = (id) => {
		console.log("view details")
		console.log(id)
		//navigate("/commits/" + id)
		navigate(`/commits/${id}`);

	}

	return(
		<Card>
			<PerfectScrollBar>
			<Box sx={{ minWidth: 1050 }}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Sha</TableCell>
								<TableCell>Descripcion</TableCell>
								<TableCell>Autor</TableCell>
								<TableCell>Fecha</TableCell>
								<TableCell>Detalles</TableCell>
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
									<TableCell>
										<VisibilityIcon onClick={() => viewDetails(commit.sha)} />									
									
									</TableCell>
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
