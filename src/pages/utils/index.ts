import { NavController, AlertController } from 'ionic-angular';

export function getRootNav(nav: NavController): NavController {
    let root = nav;
    while (root.parent != null) {
        root = root.parent;
    }
    return root;
}

export function setNavRoot(nav, Component) {
    const root = getRootNav(nav);
    root.popToRoot();
    root.setRoot(Component);
}

export function setNavPush(nav, Component) {
    const root = getRootNav(nav);
    root.popToRoot();
    root.push(Component);
}

export function createAlert(
    alertCtrl: AlertController, title: string, subTitle: string) {
    const alert = alertCtrl.create({
        title, subTitle, buttons: ['OK']
    });
    alert.present();
}
