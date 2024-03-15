import { Component, signal } from '@angular/core';

// Interface
import { IKnowledge } from '../../interface/IKnowledgeInterface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  private stringArrayKnowledge = [
    'java',
    'javascript',
    'sql',
    'html5',
    'css3',
    'nodejs',
    'angular',
    'react',
    'python',
  ];

  public arrayKnowledge = signal<IKnowledge[]>(
    this.stringArrayKnowledge.map((knowledge) => {
      return {
        src: `assets/icons/knowledge/${knowledge}.svg`,
        alt: `Ícone de conhecimento de ${knowledge}`,
      };
    })
  );
}
