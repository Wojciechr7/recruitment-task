export class CardSettingsModel {
  layout: 'row' | 'column' | 'row wrap';

  constructor(layout: 'row' | 'column' | 'row wrap' = 'row wrap') {
    this.layout = layout;
  }
}
