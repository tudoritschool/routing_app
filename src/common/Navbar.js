import {
	Navbar as NavbarBootstrap,
	NavbarBrand,
	Collapse,
	Nav,
	NavItem,
	NavLink,
	NavbarToggler,
} from "reactstrap";

import { useState } from "react";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<NavbarBootstrap color='dark' dark fixed='top' expand='lg' container='lg'>
				<NavbarBrand>ItSchool</NavbarBrand>
				<NavbarToggler
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				/>
				<Collapse navbar isOpen={isOpen}>
					<Nav className='me-auto' navbar>
						<NavItem>
							<NavLink href='/'>Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='/produse'>Produse</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</NavbarBootstrap>
		</>
	);
}

export default Navbar;
