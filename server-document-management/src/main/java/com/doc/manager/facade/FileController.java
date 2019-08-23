package com.doc.manager.facade;

import com.doc.manager.dao.FileEntityRepository;
import com.doc.manager.domain.FileDocument;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.constraints.NotNull;
import java.io.IOException;
import java.net.URI;

@Slf4j
@RestController
@RequestMapping("/api/files")
@CrossOrigin(value = {"*"}, exposedHeaders = {"Content-Disposition"})
public class FileController {

    @Autowired
    FileEntityRepository fileEntityRepository;

    @PostMapping
    public ResponseEntity<Void> uploadNewFile(@NotNull @RequestParam("file") MultipartFile multipartFile) throws IOException {
        try {
            FileDocument fileEntity = new FileDocument(multipartFile.getOriginalFilename(),
                                                       multipartFile.getContentType(),
                                                       multipartFile.getBytes());
            fileEntityRepository.save(fileEntity);
            URI location = ServletUriComponentsBuilder.fromCurrentRequest().build().toUri();
            return ResponseEntity.created(location).build();
        } catch (Exception ex) {
            log.error("ERROR");
        }
        return null;
    }

}
