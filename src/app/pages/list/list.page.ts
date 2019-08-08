import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild('list') list: IonList;

  usuarios: Observable<any>;

  constructor( private dataService: DataService,
               private toastCtrl: ToastController ) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  favorite(user) {
    // console.log('favorite ', user);
    this.presentToast('Adicionado ao Favoritos!');
    this.list.closeSlidingItems();
  }

  share(user) {
    // console.log('share ', user);
    this.presentToast('Compartilhado com Sucesso!');
    this.list.closeSlidingItems();
  }

  delete(user) {
    // console.log('delete ', user);
    this.presentToast('Deletado com Sucesso!');
    this.list.closeSlidingItems();
  }
}
