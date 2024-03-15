import { Component, signal, inject } from '@angular/core';
import { IProjects } from '../../interface/IProjectsInterface';

// Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/lista-de-tarefas.png',
      alt: 'Projeto Lista de tarefas',
      title: 'Lista de tarefas',
      width: '86px',
      height: '86px',
      description:
        '<p>Lista de tarefas em Angular criada para o  "Curso de Angular 2 (v17+) Typescript do Básico ao Avançado" de Dener Troquatte.</p>',
      links: [
        {
          name: 'Página no GitHub',
          href: 'https://kevinassis.github.io/udemy-angular-todolist/browser/',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
