import { Spectator, createComponentFactory, mockProvider } from '@ngneat/spectator';

import { ConfigService } from '../../../core/services';
import { IconModule } from '../icon/icon.module';
import { FooterComponent } from './footer.component';

const fakeVersion = '1.0.0';

describe('FooterComponent', () => {
  let spectator: Spectator<FooterComponent>;

  const mockConfigService = mockProvider(ConfigService, {
    getVersion: () => fakeVersion,
  });

  const createComponent = createComponentFactory({
    component: FooterComponent,
    imports: [IconModule],
    providers: [mockConfigService],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should display social links', () => {
    const socialLinks = ['twitter', 'medium', 'github', 'linkedin'];

    expect(spectator.queryAll('.links a')).toHaveLength(socialLinks.length);

    socialLinks.forEach(socialLink => {
      const linkElem = spectator.query(`.links a[data-test="${socialLink}"]`);
      expect(linkElem).toBeTruthy();
    });
  });

  it('should display version', () => {
    const versionElem = spectator.query('[data-test="version"]');
    expect(versionElem?.textContent).toContain(fakeVersion);
  });
});
