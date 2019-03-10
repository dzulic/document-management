package com.doc.manager.dao.impl;

import com.doc.manager.dao.CoreDAO;
import com.doc.manager.dao.DocumentDAOService;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public class DocumentDAOServiceImpl extends CoreDAO implements DocumentDAOService {

}
