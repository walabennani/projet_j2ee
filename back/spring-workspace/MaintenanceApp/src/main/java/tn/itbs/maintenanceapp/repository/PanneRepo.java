package tn.itbs.maintenanceapp.repository;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import tn.itbs.maintenanceapp.bean.Equipement;
import tn.itbs.maintenanceapp.bean.Panne;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface PanneRepo extends JpaRepository<Panne, Long> {
    Panne save(Panne panne);
    Optional<Panne> findById(Long id);
    List<Panne> findAll();
    void deleteById(Long id);
    boolean existsById(Long id);
   Panne findByUuid(UUID uuid);
    List<Panne> findByEquipement(Equipement equipment);
    List<Panne> findAllByOrderByDateReported();
    Page<Panne> findAll(Pageable pageable);
}
