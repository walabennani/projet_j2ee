package tn.itbs.maintenanceapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.itbs.maintenanceapp.bean.Equipement;
import java.util.List;

public interface EquipementRepo extends JpaRepository<Equipement, Long> {
    List<Equipement> findByNomContainingIgnoreCase(String nom);
}
