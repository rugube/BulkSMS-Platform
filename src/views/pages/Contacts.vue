<template>

  <CContainer style="opacity:0.9">
    <CCard>
      <CCardHeader>
        
        <h1><img src="img/logo/dataage-logo.png" style="width:150px;margin-bottom:-10px" /></h1>
      </CCardHeader>
     
    </CCard>
        <CCard>
          <CCardHeader>
            <strong>Contacts</strong>
          <CRow class="float-right">
            <CCol col="10" sm="4" md="2" xl class="float-left">
              <CButton block color="dark"><strong>Import Contacts</strong></CButton>
            </CCol>

          </CRow>
            
            
          </CCardHeader>
        <CCard>
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
            </CNavbarNav>
        </CCard>
        <CCard>
          <CForm>
              <CTextarea
                horizontal
                rows="9"
              />
  
            </CForm>
        </CCard>
        </CCard>
      

            
  </CContainer>

</template>