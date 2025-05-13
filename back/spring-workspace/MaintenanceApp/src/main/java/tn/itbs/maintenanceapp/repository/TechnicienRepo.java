package tn.itbs.maintenanceapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.itbs.maintenanceapp.bean.Technicien;


import java.util.List;
import java.util.UUID;

public interface TechnicienRepo extends JpaRepository<Technicien, Long> {
    Technicien findByUuid(UUID uuid);
    List<Technicien> findByNameContainingIgnoreCase(String name);
    List<Technicien> findByAvailableTrue();
    Technicien findByName(String name);
    
    boolean existsByNameAndCompetences(String name, String competences);


    

}
