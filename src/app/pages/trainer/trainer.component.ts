import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  trainer: string = "ash";
  valor: number = 3;
  condicao: boolean = true;
  imagemPikachu: string = "http://images6.fanpop.com/image/photos/40400000/pikachu-pikachu-40495375-480-360.jpg"
  buttonDisabled: boolean = true;
  size: number = 10;
  is_show: boolean = true;
  trainers: any[] = [
    { name: 'ash', birthdate: '2009-02-06' },
    { name: 'misty', birthdate: '1999-02-06' },
    { name: 'brock', birthdate: '1994-02-06' },
    { name: 'gary', birthdate: '2009-02-06' },
    { name: 'teteu', birthdate: '1998-02-06' },

  ];
  constructor() { }

  ngOnInit() {
  }

  getValor(){
    return 1;
  }

  onClick() {
    this.is_show = !this.is_show;
  }
  delete(i){
    this.trainers.splice(i,1);
  }

}
