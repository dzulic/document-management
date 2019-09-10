package com.doc.manager.facade;

import com.doc.manager.responses.RestResponse;
import com.doc.manager.service.CompanyService;
import com.doc.manager.transfer.CompanyDTO;
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
        return companyService.createCompany(companyDTO);
    }

    @RequestMapping(value = "/getCompanies", method = RequestMethod.GET)
    public RestResponse getCompanies() {
        return companyService.getCompanies();
    }

}
