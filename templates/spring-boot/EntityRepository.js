module.exports = `package com.teclaup.irecorte.{{Entity}};

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface {{Entity}}Repository extends JpaRepository<{{Entity}}, Long> {

    List<{{Entity}}> findByName(String name);
    
}`