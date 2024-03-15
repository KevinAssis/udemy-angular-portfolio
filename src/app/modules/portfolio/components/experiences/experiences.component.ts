import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiencesInterface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Estagiário',
        p: 'TCE-RJ | Jan 2022 - Jul 2022',
      },
      text: '<p>Criação e modificação de arquivos no Excel para otimizar processos, frequentemente utilizando VBA. Desenvolvimento de bancos de dados no Microsoft Access utilizando SQL para substituição de arquivos do Excel. Suporte a usuários no uso do pacote office e Windows.</p>',
    },
    {
      summary: {
        strong: 'Estagiário Help Desk',
        p: 'Frilog Transportes | Mar 2020 - Mar 2021',
      },
      text: '<p>Manutenção corretiva e preventiva em computadores, suporte a usuários, instalação e desinstalação de softwares, envio e recebimento de equipamentos de TI e suporte nos processos de gestão do TI.</p>',
    },
  ]);
}
