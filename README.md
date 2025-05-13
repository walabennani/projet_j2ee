🔧 Gestion des Opérations de Maintenance 🔧

Cette application optimise et automatise l’ensemble du cycle de maintenance, depuis l’affectation des techniciens selon leurs compétences jusqu’au suivi des interventions et à la gestion des pannes. Cette solution backend, modulaire et sécurisée, repose sur des API REST claires et bien structurées.

⚙️ Technologies Utilisées

🧰 Conditions préalables
- ☕ Java 21
- ⚡ Gradle
- 🗄️ MySQL

📚 Fonctionnalités

   CRUD complet sur :
   
     - Pannes
     
     - Équipements
     
     - Interventions
     
     - Techniciens

🌐 API REST sécurisée



  
📁 Structure du projet

src/main/java

└── tn/itbs/maintenanceapp

├── bean/               # JPA Entities

├── controller/         # REST Controllers

├── repository/         # Spring Data Repos

├── security/           # Auth & Security Config

├── service/           

└── MaintenanceAppApplication.java

👨‍💻 Test avec Postman

Vous pouvez tester les points de terminaison à l'aide de Postman :

 - Content-Type: application/json
  
📝 Auteur

Projet réalisé par wala bennani

Développé avec Eclipse (backend) et VS Code (frontend)
