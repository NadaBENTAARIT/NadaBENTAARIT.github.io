import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [
    {
      id: 1,
      name: 'Évaluateur de projet Web',
      summary: 'Évaluateur de projet Web pour une plateforme de challenges de coding utilisant ReactJS, Symfony, MongoDB, Docker, Kubernetes et CI/CD.',
      description: 'Ce projet consiste à développer un évaluateur de projet Web pour une plateforme de challenges de coding. Le backend est développé avec Symfony et MongoDB, tandis que le frontend utilise ReactJS. Le projet inclut également des tests e2e avec Playwright, ainsi qu\'un déploiement automatisé via Docker, Kubernetes, et CI/CD.',
      projectLink: '',
      tags: [Tag.REACTJS, Tag.SYMFONY, Tag.MONGODB, Tag.DOCKER, Tag.KUBERNETES, Tag.CICD, Tag.PLAYWRIGHT],
      pictures: ["../../assets/evaluator/project_evaluator_01.png", "../../assets/evaluator/project_evaluator_02.png","../../assets/evaluator/project_evaluator_03.png","../../assets/evaluator/project_evaluator_04.png","../../assets/evaluator/project_evaluator_05.png"]
    },
    {
      id: 2,
      name: 'LoterieApp - Version Mobile',
      summary: 'Développement de la version mobile d’une application de jeu de loterie utilisant React Native.',
      description: 'LoterieApp est une application de jeu de loterie développée pour la version mobile avec React Native. Ce projet inclut des fonctionnalités pour l\'achat de tickets en ligne, ainsi qu\'une interface utilisateur conviviale et responsive pour une utilisation mobile.',
      projectLink: '',
      tags: [Tag.REACTNATIVE],
      pictures: ["../../assets/loto-mobile/loterieapp_mobile_01.jpg", "../../assets/loto-mobile/loterieapp_mobile_02.jpg", "../../assets/loto-mobile/loterieapp_mobile_03.jpg", "../../assets/loto-mobile/loterieapp_mobile_04.jpg", "../../assets/loto-mobile/loterieapp_mobile_05.jpg", "../../assets/loto-mobile/loterieapp_mobile_06.jpg", "../../assets/loto-mobile/loterieapp_mobile_07.jpg", "../../assets/loto-mobile/loterieapp_mobile_08.jpg", "../../assets/loto-mobile/loterieapp_mobile_09.jpg", "../../assets/loto-mobile/loterieapp_mobile_10.jpg", "../../assets/loto-mobile/loterieapp_mobile_11.jpg", "../../assets/loto-mobile/loterieapp_mobile_12.jpg"]
    },
    {
      id: 3,
      name: 'Application de Loterie Web',
      summary: 'Développement d\'une application Web permettant l\'achat de tickets de loterie en ligne, utilisant React, AWS et Docker.',
      description: 'Développement d\'une application Web de jeu de loterie permettant aux utilisateurs d\'acheter des tickets en ligne. Le backend utilise AWS (RDS, Cognito, API Gateway, Lambda), tandis que le frontend est développé avec React. Le déploiement se fait via Docker et la base de données est gérée par AWS RDS.',
      projectLink: 'https://github.com/NadaBENTAARIT/Loterie_Backend.git',
      tags: [Tag.REACTJS,Tag.PYTHON, Tag.AWS, Tag.DOCKER, Tag.RDS, Tag.LAMBDA, Tag.COGNITO, Tag.APIGATEWAY],
      pictures: ["../../assets/loto-web/loterieapp_web_01.png", "../../assets/loto-web/loterieapp_web_02.png", "../../assets/loto-web/loterieapp_web_03.png", "../../assets/loto-web/loterieapp_web_04.png", "../../assets/loto-web/loterieapp_web_05.png", "../../assets/loto-web/loterieapp_web_06.png"]
    },
    {
      id: 4,
      name: 'Application Web e-commerce',
      summary: 'Développement d’une application Web e-commerce utilisant Angular et Spring Boot.',
      description: 'Cette application e-commerce permet l\'achat d\'articles en ligne. Le frontend est développé en Angular tandis que le backend utilise Spring Boot pour gérer les services REST et les transactions. La base de données est gérée avec MySQL et le projet est déployé avec Docker.',
      projectLink: 'https://github.com/NadaBENTAARIT/E_Commerce_Backend_Web_App.git',
      tags: [Tag.ANGULAR, Tag.SPRINGBOOT, Tag.SQL, Tag.DOCKER],
    },
    {
      id: 5,
      name: 'Application BI - Linedata Chorus',
      summary: 'Développement d\'une application de Business Intelligence pour la base de données financière du produit Linedata Chorus.',
      description: 'Développement d\'une application BI pour le produit financier Linedata Chorus, permettant le comptage et l\'analyse des données. Le projet utilise Talend pour l\'ETL, Microsoft Power BI pour la visualisation, et Sybase pour la base de données.',
      projectLink: '',
      tags: [Tag.TALEND, Tag.POWERBI, Tag.SYBASE],
      pictures: ["../../assets/bi-portfolio/bi_01.jpg", "../../assets/bi-portfolio/bi_02.jpg","../../assets/bi-portfolio/bi_03.jpg","../../assets/bi-portfolio/bi_04.jpg","../../assets/bi-portfolio/bi_05.jpg"]
    },
    {
      id: 6,
      name: 'Islands Magazine - Site Web',
      summary: 'Développement d’un site Web pour l’agence Islands Magazine, utilisant HTML, CSS et JavaScript.',
      description: 'Ce projet consiste en la création d\'un site Web pour l\'agence Islands Magazine. Le site a été développé avec HTML, CSS et JavaScript pour offrir une interface utilisateur attrayante et responsive.',
      projectLink: '',
      tags: [Tag.HTML5, Tag.CSS3, Tag.JAVASCRIPT],
      pictures: ["../../assets/island-magazine/islands_01.PNG", "../../assets/island-magazine/islands_02.PNG","../../assets/island-magazine/islands_03.PNG","../../assets/island-magazine/islands_04.PNG","../../assets/island-magazine/islands_05.PNG",]
    }
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle('Portfolio | Nada BENTAARIT');
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
