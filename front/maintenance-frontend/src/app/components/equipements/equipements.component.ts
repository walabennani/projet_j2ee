import { Component, OnInit } from '@angular/core';
import { EquipementService, Equipement } from '../../services/equipement.service';

@Component({
  selector: 'app-equipements',
  templateUrl: './equipements.component.html',
})
export class EquipementsComponent implements OnInit {

  equipements: Equipement[] = [];
  newEquipement: Equipement = { nom: '', status: '', acquisitionDate: '' };
  isEditMode: boolean = false;

  constructor(private equipementService: EquipementService) {}

  ngOnInit(): void {
    this.loadEquipements();
  }

  loadEquipements() {
    this.equipementService.getEquipements().subscribe(data => {
      this.equipements = data;
    });
  }

  saveEquipement() {
    if (this.isEditMode && this.newEquipement.id) {
      this.equipementService.updateEquipement(this.newEquipement.id, this.newEquipement).subscribe(() => {
        this.loadEquipements();
        this.resetForm();
      });
    } else {
      this.equipementService.addEquipement(this.newEquipement).subscribe(() => {
        this.loadEquipements();
        this.resetForm();
      });
    }
  }

  deleteEquipement(id: number) {
    this.equipementService.deleteEquipement(id).subscribe(() => {
      this.loadEquipements();
    });
  }

  editEquipement(e: Equipement) {
    this.newEquipement = { ...e }; // clone pour ne pas modifier directement
    this.isEditMode = true;
  }

  resetForm() {
    this.newEquipement = { nom: '', status: '', acquisitionDate: '' };
    this.isEditMode = false;
  }
}
