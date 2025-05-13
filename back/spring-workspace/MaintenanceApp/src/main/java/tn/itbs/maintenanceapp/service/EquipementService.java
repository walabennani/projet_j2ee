package tn.itbs.maintenanceapp.service;


import tn.itbs.maintenanceapp.bean.Equipement;
import tn.itbs.maintenanceapp.repository.EquipementRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class EquipementService {

    private final EquipementRepo equipementRepo;

    @Autowired
    public EquipementService(EquipementRepo equipementRepo) {
        this.equipementRepo = equipementRepo;
    }

    public List<Equipement> getAllEquipement() {
        return equipementRepo.findAll();
    }

    public Optional<Equipement> getEquipementById(Long id) {
        return equipementRepo.findById(id);
    }

    public Equipement saveEquipement(Equipement equipement) {
        if (equipement.getUuid() == null) {
            equipement.setUuid(UUID.randomUUID());
        }
        return equipementRepo.save(equipement);
    }

    public void deleteEquipement(Long id) {
        equipementRepo.deleteById(id);
    }

    public List<Equipement> searchEquipementByName(String nom) {
        return equipementRepo.findByNomContainingIgnoreCase(nom);
    }
}
