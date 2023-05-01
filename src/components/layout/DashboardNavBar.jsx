import React from "react";
import styled from "@emotion/styled";
import {
	AppBar,
	Box,
	IconButton,
	Toolbar,
	Tooltip,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'; 

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	boxShadow: theme.shadows[3],
}));

const DashboardNavBar = (props) => {
	const { onSideBarOpen, ...other } = props;

	return (
		<>
			<DashboardNavbarRoot
				sx={{
					left: {
						lg: 280,
					},
					width: {
						lg: "calc(100% - 280px)",
					},
				}}
			>
				<Toolbar
					disableGutters
					sx={{
						minHeight: 64,
						left: 0,
						px: 2,
					}}
				>
					<IconButton
						onClick={onSideBarOpen}
						sx={{
							display: {
								xs: "inline-flex",
								lg: "none",
							},
						}}
					>
						<MenuIcon fontSize="small" />
					</IconButton>					
					<Box sx={{ flexGrow: 1 }} />
									
				</Toolbar>
			</DashboardNavbarRoot>
		</>
	);
};

export default DashboardNavBar;