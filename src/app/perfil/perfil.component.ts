import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class PerfilComponent {
  fotoPerfil: string | undefined;

  abrirSeletor() {
    const input = document.getElementById('inputFoto') as HTMLInputElement;
    input.click(); // dispara o input escondido
  }
  

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => this.fotoPerfil = reader.result as string;
      reader.readAsDataURL(file);
    }
  }
  
}
