import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  @Input() image = '';
  @Input() alt = '';
  @Input() title = '';
  @Input() progressValue = 0;

  public progressClass = '';
  public dividerPositions = [20, 40, 60, 80, 100];
  public messages = [
    {
      text: 'Precisa de melhorias',
      visible: this.progressValue <= 20,
    },
    {
      text: 'Abaixo do esperado',
      visible: this.progressValue > 20 && this.progressValue <= 40,
    },
    {
      text: 'Adequado',
      visible: this.progressValue > 40 && this.progressValue <= 60,
    },
    {
      text: 'Acima das expectativas',
      visible: this.progressValue > 60 && this.progressValue <= 80,
    },
    {
      text: 'Excepcional',
      visible: this.progressValue > 80,
    }
  ];

  public isMobile: boolean = window.innerWidth < 768;

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth < 768;
  }

  public ngOnInit() {
    this.updateProgressClass();
    this.updateMessagesVisibility();
  }

  private updateMessagesVisibility(): void {
    this.messages.forEach((message, index) => {
      if (index === 0) {
        message.visible = this.progressValue <= this.dividerPositions[index];
      } else {
        message.visible = this.progressValue > this.dividerPositions[index - 1] && this.progressValue <= this.dividerPositions[index];
      }
    });
  }

  private updateProgressClass(): void {
    if (this.progressValue <= 40) {
      this.progressClass = 'progress-warn';
    } else if (this.progressValue > 40 && this.progressValue <= 60) {
      this.progressClass = 'progress-accent';
    } else {
      this.progressClass = 'progress-primary';
    }
  }
}
