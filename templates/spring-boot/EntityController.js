module.exports = ` 
package com.teclaup.irecorte.{{Entity}};


import com.teclaup.irecorte.exception.EntityNotFoundException;
import com.teclaup.irecorte.response.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value="/api/{{Entity}}")
@CrossOrigin(origins = "*")
public class {{Entity}}Controller {
    private static final Logger log = LoggerFactory.getLogger({{Entity}}.class);
    @Autowired
    private {{Entity}}Service {{Entity}}Service;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Response<{{Entity}}>> create(@Valid @RequestBody {{Entity}} {{Entity}}, BindingResult result){
        log.info("Cadastrando {{Entity}} {}", {{Entity}});
        Response<{{Entity}}> response = new Response<>();
        if(result.hasErrors()){
            log.error("Erro ao cadastrar {{Entity}}");
            result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
            return ResponseEntity.badRequest().body(response);
        }
        {{Entity}} = this.{{Entity}}Service.save({{Entity}});
        response.setData({{Entity}});
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<Response<List<{{Entity}}>>> findAll(){
        log.info("Buscando todos os {{Entity}}s {}");
        Response<List<{{Entity}}>> response = new Response<>();
        List<{{Entity}}> list{{Entity}} = this.{{Entity}}Service.findAll();
        response.setData(list{{Entity}});
        return ResponseEntity.ok(response);
    }

    @DeleteMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public void delete(@PathVariable("id") Long id){
        log.info("Buscando {{Entity}} com o ID: {}", id);
        Optional<{{Entity}}> {{Entity}} = this.{{Entity}}Service.findById(id);
        if(!{{Entity}}.isPresent()){
            throw new EntityNotFoundException({{Entity}}.class, id);
        }
        this.{{Entity}}Service.delete({{Entity}}.get());
    }

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Response<{{Entity}}>> findById(@PathVariable("id") Long id) {
        log.info("Buscando {{Entity}} pelo ID: {}", id);
        Response<{{Entity}}> response = new Response<{{Entity}}>();
        Optional<{{Entity}}> {{Entity}} = this.{{Entity}}Service.findById(id);
        if (!{{Entity}}.isPresent()) {
            throw new EntityNotFoundException({{Entity}}.class, id);
        }
        response.setData({{Entity}}.get());
        return ResponseEntity.ok(response);
    }

}`