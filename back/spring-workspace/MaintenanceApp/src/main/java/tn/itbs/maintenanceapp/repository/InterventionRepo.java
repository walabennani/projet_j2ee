package tn.itbs.maintenanceapp.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import tn.itbs.maintenanceapp.bean.Intervention;
import tn.itbs.maintenanceapp.bean.InterventionStatus;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface InterventionRepo extends JpaRepository<Intervention, Long> {
	List<Intervention> findByTechnicianId(Long technicianId);

    List<Intervention> findByEquipmentId(Long equipmentId);
    Optional<Intervention> findByUuid(UUID uuid);
    List<Intervention> findByDate(LocalDate date);
    List<Intervention> findByStatus(InterventionStatus status);

}
