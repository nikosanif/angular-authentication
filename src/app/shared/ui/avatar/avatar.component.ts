import { Component, Input } from '@angular/core';

@Component({
  selector: 'aa-avatar',
  template: `
    {{ computedText }}
  `,
  styleUrl: './avatar.component.scss',
})
export class AvatarComponent {
  @Input({ required: true })
  text = '';

  get computedText(): string {
    if (!this.text) return '';

    const words = this.text.split(' ');

    return words.length > 1
      ? words[0].slice(0, 1) + words[1].slice(0, 1)
      : words[0].slice(0, 1);
  }
}
