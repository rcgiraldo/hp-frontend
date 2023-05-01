import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import DashboardNavbar from "../layout/DashboardNavBar";
import DashboardSideBar from "./DashboardSideBar";

const DashboardLayoutRoot = styled("div")(({ theme }) => ({
	display: "flex",
	flex: "1 1 auto",
	maxWidth: "100%",
	paddingTop: 64,
	[theme.breakpoints.up("lg")]: {
		paddingLeft: 280,
	},
}));


const Layout = (props) => {
	const { children } = props;
	const {isSidebarOpen, setSideBarOpen} = useState(true);
	const location = useLocation();

	console.log("Testing layout")

	if (location.pathname === "/login") {
		return <>{children}</>;
	} else {
		return (
			<>
				<DashboardLayoutRoot>
					<Box
						sx={{
							display: "flex",
							flex: "1 1 auto",
							flexDirection: "column",
							width: "100%",
						}}
					>
						{children}
					</Box>
				</DashboardLayoutRoot>
				<DashboardNavbar onSidebarOpen={() => setSideBarOpen(true)} />
				<DashboardSideBar
					onClose={() => setSideBarOpen(false)}
					open={isSidebarOpen}
				/>
			</>
		);
	}

};

export default Layout;