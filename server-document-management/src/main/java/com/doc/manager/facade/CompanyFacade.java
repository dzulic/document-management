package com.doc.manager.facade;

import com.doc.manager.responses.RestResponse;
import com.doc.manager.service.CompanyService;
import com.doc.manager.transfer.CompanyDTO;
import com.doc.manager.util.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/companyWS")
@RestController
@CrossOrigin(value = "*")
public class CompanyFacade {
    @Autowired
    CompanyService companyService;

    @RequestMapping("/createCompany")
    public RestResponse createCompany(@RequestBody CompanyDTO companyDTO) {
        try {
            return companyService.createCompany(companyDTO);
        } catch (Exception ex) {
            return new RestResponse(Constants.FAILURE, "");
        }
    }

    @RequestMapping(value = "/getCompanies", method = RequestMethod.GET)
    public RestResponse getCompanies() {
        try {
            return companyService.getCompanies();
        } catch (Exception ex) {
            return new RestResponse(Constants.FAILURE, "");
        }
    }

}
