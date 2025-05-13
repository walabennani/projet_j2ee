import { Component, OnInit } from '@angular/core';
import { PanneService, Panne } from '../../services/panne.service';
import { EquipementService, Equipement } from '../../services/equipement.service';

@Component({
  selector: 'app-pannes',
  templateUrl: './pannes.component.html',
  styleUrls: ['./pannes.component.css']
})
export class PannesComponent implements OnInit {

  pannes: Panne[] = [];
  equipements: Equipement[] = [];

  newPanne: Panne = {
    description: '',
    category: '',
    dateReported: '',
    equipement: { id: 0, nom: '' }
  };

  selectedEquipementId: number = 0;
  isEditMode: boolean = false;
  editId: number | null = null;

  categories: string[] = [
    'HARDWARE',
    'SOFTWARE',
    'NETWORK',
    'PERIPHERAL',
    'OVERHEATING',
    'BATTERY_CHARGING',
    'PHYSICAL_DAMAGE',
    'MISCELLANEOUS'
  ];

  constructor(
    private panneService: PanneService,
    private equipementService: EquipementService
  ) {}

  ngOnInit(): void {
    this.loadPannes();
    this.loadEquipements();
  }

  loadPannes() {
    this.panneService.getPannes().subscribe(data => {
      this.pannes = data;
    });
  }

  loadEquipements() {
    this.equipementService.getEquipements().subscribe(data => {
      this.equipements = data;
    });
  }

  savePanne() {
  // Récupérer l'objet équipement à partir de son id
  const selectedEquipement = this.equipements.find(eq => eq.id === this.selectedEquipementId);

  if (!selectedEquipement) {
    console.error("Aucun équipement sélectionné !");
    return;
  }

  const panneToSave: Panne = {
    ...this.newPanne,
    equipement: { id: this.selectedEquipementId, nom: '' }
  };

  if (this.isEditMode && this.editId !== null) {
    this.panneService.updatePanne(this.editId, panneToSave).subscribe(() => {
      this.resetForm();
      this.loadPannes();
    });
  } else {
    this.panneService.addPanne(panneToSave).subscribe(() => {
      this.resetForm();
      this.loadPannes();
    });
  }
}



 editPanne(panne: Panne) {
  this.isEditMode = true;
  this.editId = panne.id!;
  this.newPanne = {
    description: panne.description,
    category: panne.category,
    dateReported: panne.dateReported,
    equipement: panne.equipement
  };
  this.selectedEquipementId = panne.equipement.id;
}

  deletePanne(id: number) {
    this.panneService.deletePanne(id).subscribe(() => {
      this.loadPannes();
    });
  }

 resetForm() {
  this.newPanne = {
    description: '',
    category: '',
    dateReported: '',
    equipement: { id: 0, nom: '' }
  };
  this.selectedEquipementId = 0;
  this.isEditMode = false;
  this.editId = null;
}


  getEquipementName(id: number): string {
    const equip = this.equipements.find(e => e.id === id);
    return equip ? equip.nom : '';
  }
}
