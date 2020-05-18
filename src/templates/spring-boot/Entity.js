module.exports = ` package {{package}};
import lombok.Data;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;

@Entity
@Data
@Table(name="{{entity}}")
public class {{Entity}} implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

}
`