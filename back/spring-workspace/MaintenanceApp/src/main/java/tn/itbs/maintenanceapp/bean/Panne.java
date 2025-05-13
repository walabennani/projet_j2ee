package tn.itbs.maintenanceapp.bean;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.UUID;


@Entity
@Table(name = "pannes")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Panne {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, updatable = false)
    private UUID uuid = UUID.randomUUID();  

    @Column(nullable = false)
    private String description;  

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private CategoryPanne category;  

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "equipment_id", nullable = false)
    private Equipement equipement;  

    @Column(name = "report_date", nullable = false)
    private LocalDateTime dateReported;  
}
