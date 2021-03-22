export interface IAppModel {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  thumbnails: string[];
  android: true;
  ios: true;
  androidUrl: string;
  iosUrl: string;
  preview: string;
  author: string;
  supportEmail: string;
}
