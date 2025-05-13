package tn.itbs.maintenanceapp.bean;


import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;


@Entity
@Table(name = "interventions")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Intervention {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, updatable = false)
    private UUID uuid = UUID.randomUUID();


    @ManyToOne
    @JoinColumn(name = "equipement_id", nullable = false)
    private Equipement equipment;

    @ManyToOne
    @JoinColumn(name = "technicien_id", nullable = false)
    private Technicien technician;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private InterventionStatus status;

    @Column(nullable = false)
    private LocalDate date;

    @Column(nullable = false)
    private BigDecimal cost;
}