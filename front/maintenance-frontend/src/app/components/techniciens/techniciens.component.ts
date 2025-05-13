import { Component, OnInit } from '@angular/core';
import { TechnicienService, Technicien } from '../../services/technicien.service';

@Component({
  selector: 'app-techniciens',
  templateUrl: './techniciens.component.html',
  styleUrls: ['./techniciens.component.css']
})
export class TechniciensComponent implements OnInit {

  techniciens: Technicien[] = [];
  newTechnicien: Technicien = {
    name: '',
    competences: '',
    available: ''
  };
  isEditMode: boolean = false;
  editId: number | null = null;

  constructor(private technicienService: TechnicienService) {}

  ngOnInit(): void {
    this.loadTechniciens();
  }

  loadTechniciens() {
    this.technicienService.getTechniciens().subscribe(data => {
      this.techniciens = data;
    });
  }

  saveTechnicien() {
    if (this.isEditMode && this.editId !== null) {
      this.technicienService.updateTechnicien(this.editId, this.newTechnicien).subscribe(() => {
        this.resetForm();
        this.loadTechniciens();
      });
    } else {
      this.technicienService.addTechnicien(this.newTechnicien).subscribe(() => {
        this.resetForm();
        this.loadTechniciens();
      });
    }
  }

  editTechnicien(technicien: Technicien) {
    this.isEditMode = true;
    this.editId = technicien.id!;
    this.newTechnicien = { ...technicien };
  }

  deleteTechnicien(id: number) {
    this.technicienService.deleteTechnicien(id).subscribe(() => {
      this.loadTechniciens();
    });
  }

  resetForm() {
    this.newTechnicien = { name: '', competences: '', available: '' };
    this.isEditMode = false;
    this.editId = null;
  }
}
