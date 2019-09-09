package com.doc.manager.dao;

import com.doc.manager.domain.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account, Integer> {
    Account findByUserName(String userName);

    Account findByEmployeeID(int id);
}
