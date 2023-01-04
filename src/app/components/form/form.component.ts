import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  nombre!: string
  descripcion!: string
  data: any[] = []

  addTarea(nom: string, des: string) {
    this.nombre = nom
    this.descripcion = des


    class agregarTraea {
      nom: string
      des: string

      constructor(n: string, d: string) {
        this.nom = n
        this.des = d
      }

    }
    var tarea = new agregarTraea(this.nombre, this.descripcion)
    this.data.push(tarea)
console.log(this.data)
  }

}
