import { AlertController } from 'ionic-angular';

declare const ga;

export function createAlert(
    alertCtrl: AlertController, title: string, subTitle: string) {
    const alert = alertCtrl.create({
        title, subTitle, buttons: ['OK']
    });
    alert.present();
}

export function gaSend(category: string, action: string, label: string, value: number | string) {
    ga('send', 'event', category, action, label, value);
}
