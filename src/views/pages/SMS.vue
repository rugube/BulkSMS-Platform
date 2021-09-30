<template>

  <CContainer style="opacity:0.9">
    <CCard>
      <CCardHeader>
        
        <h1><img src="img/logo/dataage-logo.png" style="width:150px;margin-bottom:-10px" /></h1>
      </CCardHeader>
      <CCardBody>
        <CNavbar
          expandable="md"
          color="info"
        >
          <CToggler inNavbar @click="show=!show"/>
          <CNavbarBrand href="#"> Bulk SMS</CNavbarBrand>
          <CCollapse :show="show" navbar>

            <!-- Right aligned nav items -->
            <CNavbarNav class="ml-auto">
              <CForm inline class="align-middle">
                <CInput
                  class="mr-2 my-0"
                  placeholder="Search"
                  size="sm"
                />
                <CButton color="light" size="sm">
                  Search
                </CButton>
              </CForm>
              <CDropdown
                in-nav
                toggler-text="User"
              >
                <CDropdownItem>Profile</CDropdownItem>
                <CDropdownItem>Signout</CDropdownItem>
              </CDropdown>
            </CNavbarNav>
          </CCollapse>
        </CNavbar>
      </CCardBody>
    </CCard>
     <CRow>
      <CCol md="6">
        <CCard>
          <CCardHeader>
            <strong>New</strong> Message
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput
                description="Recipients: 0 "
                label="To:"
                horizontal
                autocomplete="name"
              />
              
              <CTextarea
                label="Message:"
                placeholder="Type your message..."
                horizontal
                rows="9"
              />
  
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton type="reset" size="sm" color="warning"><CIcon name="cil-ban"/> Discard</CButton>
          </CCardFooter>
        </CCard>
      
      </CCol>
      <CCol md="6">
        <CCard>
          <CCardBody><CIcon name="cil-check"/><a href='#'>  Import Contacts</a></CCardBody>
          <CCardBody><CIcon name="cil-check"/><a href='#'>  Select Groups</a></CCardBody>
           <CCardBody><CIcon name="cil-check"/><a href='#'> Add Attachment</a></CCardBody>
  
          
          
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-envelope"/> Send Message</CButton>
  
          </CCardFooter>
        </CCard>
       
       
      </CCol>
    </CRow>

            
  </CContainer>

</template>