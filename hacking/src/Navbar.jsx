// import React,{useState,CNavbar,CNavItem,CDropdown,CDropdownDivider,CDropdownItem,CDropdownMenu,CDropdownToggle,CContainer,CNavbarBrand,CNavbarNav,CCollapse,CNavbarToggler,CButton,CForm,CFormInput,CNavLink} from "react";
// import '@coreui/coreui/dist/css/coreui.min.css'

// function Navbar(){
//     const [visible, setVisible] = useState(false)
//     return (
//       <>
//         <CNavbar expand="lg" colorScheme="light" className="bg-light">
//           <CContainer fluid>
//             <CNavbarBrand href="#">Navbar</CNavbarBrand>
//             <CNavbarToggler onClick={() => setVisible(!visible)} />
//             <CCollapse className="navbar-collapse" visible={visible}>
//               <CNavbarNav>
//                 <CNavItem>
//                   <CNavLink href="#" active>
//                     Home
//                   </CNavLink>
//                 </CNavItem>
//                 <CNavItem>
//                   <CNavLink href="#">Link</CNavLink>
//                 </CNavItem>
//                 <CDropdown variant="nav-item" popper={false}>
//                   <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
//                   <CDropdownMenu>
//                     <CDropdownItem href="#">Action</CDropdownItem>
//                     <CDropdownItem href="#">Another action</CDropdownItem>
//                     <CDropdownDivider />
//                     <CDropdownItem href="#">Something else here</CDropdownItem>
//                   </CDropdownMenu>
//                 </CDropdown>
//                 <CNavItem>
//                   <CNavLink href="#" disabled>
//                     Disabled
//                   </CNavLink>
//                 </CNavItem>
//               </CNavbarNav>
//               <CForm className="d-flex">
//                 <CFormInput type="search" className="me-2" placeholder="Search" />
//                 <CButton type="submit" color="success" variant="outline">
//                   Search
//                 </CButton>
//               </CForm>
//             </CCollapse>
//           </CContainer>
//         </CNavbar>
//       </>
//     )
// }

// export default Navbar;


import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light' style={{marginBottom: "15px" }}>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Error 404</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='http://localhost:3000/private'>
                Private
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/'>
                Public
              </MDBNavbarLink>
            </MDBNavbarItem>
            {/* <MDBNavbarItem>
              <MDBNavbarLink href='#'>Link</MDBNavbarLink>
            </MDBNavbarItem> */}

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            {/* <MDBNavbarItem>
              <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                Disabled
              </MDBNavbarLink>
            </MDBNavbarItem> */}
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}