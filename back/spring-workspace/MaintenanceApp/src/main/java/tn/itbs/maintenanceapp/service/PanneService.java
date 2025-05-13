package tn.itbs.maintenanceapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import tn.itbs.maintenanceapp.bean.Equipement;
import tn.itbs.maintenanceapp.bean.Panne;
import tn.itbs.maintenanceapp.repository.PanneRepo;
import tn.itbs.maintenanceapp.service.PanneService;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PanneService  {

    private final PanneRepo panneRepo;

    @Autowired
    public PanneService(PanneRepo panneRepo) {
        this.panneRepo = panneRepo;
    }

    public Panne savePanne(Panne panne) {
        return panneRepo.save(panne);
    }

    public Optional<Panne> getPanneById(Long id) {
        return panneRepo.findById(id);
    }

    public List<Panne> getAllPanne() {
        return panneRepo.findAll();
    }

    public void deletePanne(Long id) {
        panneRepo.deleteById(id);
    }
 
    
    public boolean PanneExists(Long id) {
        return panneRepo.existsById(id);
    }

    public Panne getPanneByUuid(UUID uuid) { // Correction du nom (pas "getPannetByUuid")
        return panneRepo.findByUuid(uuid);
    }

    public List<Panne> getAllPanneSortedByDate() { // Renommage de la méthode
        return panneRepo.findAllByOrderByDateReported();
    }

    public Page<Panne> getPagedPanne(Pageable pageable) { // Renommage de la méthode
        return panneRepo.findAll(pageable);
    }

	public List<Panne> getPanneByEquipement(Equipement equipment) {
		// TODO Auto-generated method stub
		return null;
	}
}