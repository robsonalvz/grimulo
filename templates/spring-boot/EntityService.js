module.exports = `
package com.teclaup.irecorte.{{Entity}};
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class {{Entity}}Service {
    @Autowired
    private {{Entity}}Repository {{Entity}}Repository;

    public {{Entity}} save({{Entity}} {{Entity}}){
        return this.{{Entity}}Repository.save({{Entity}});

    }

    public List<{{Entity}}> findAll(){
        return this.{{Entity}}Repository.findAll();
    }

    public Optional<{{Entity}}> findById(Long id){
        return this.{{Entity}}Repository.findById(id);
    }


    public void delete({{Entity}} {{Entity}}) {
        this.{{Entity}}Repository.delete({{Entity}});
    }


}`
