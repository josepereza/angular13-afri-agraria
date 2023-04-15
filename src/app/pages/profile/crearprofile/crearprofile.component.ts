import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-crearprofile',
  templateUrl: './crearprofile.component.html',
  styleUrls: ['./crearprofile.component.css']
})
export class CrearprofileComponent implements OnInit {

  clienteForm = this.fb.group({
    apellido: ['',Validators.required],
    nombre: ['',Validators.required],
    email: ['', Validators.email],
    direccion: ['',Validators.required],
    ciudad: ['',Validators.required],
    cp: ['',Validators.required],
    pais: ['Suiza',Validators.required],

    apellido_fact: [''],
    nombre_fact: [''],
    email_fact: [''],
    direccion_fact: [''],
    ciudad_fact: [''],
    cp_fact: [''],

    pais_fact: ['Suiza'],
  });


  constructor(private fb:FormBuilder, private profileSevice:ProfileService) { }

  ngOnInit(): void {
  }
crearProfile(){
  this.profileSevice.createClienteProfile(this.clienteForm.value).subscribe(data=>{
    console.log(data)
  })


}
}
