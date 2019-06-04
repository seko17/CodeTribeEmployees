import { Injectable } from '@angular/core';
import {  employees } from '../model/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  constructor() {
    
  }
  employee: Array<employees> = [
    {
      id: 1,
      name: "Siseko",
      surname:"dolwana",
      image:
        "https://scontent.fjnb10-1.fna.fbcdn.net/v/t1.0-9/60076897_2171812622937316_5449792420306747392_n.jpg?_nc_cat=103&_nc_ht=scontent.fjnb10-1.fna&oh=a9314e9c0eca7856deed4f94eda75b4f&oe=5D9A18F5",
        bio:
        "Peter Gene Hernandez (born October 8, 1985), known professionally as Bruno Mars, is an American singer, songwriter, multi-instrumentalist, record producer,",
        gender: "Male",
        DOB:"19-05-2007"
    },
    {
      id: 2,
      name: "Njabulo ",
      surname:"Mlangeni",
      image:
        "https://www.mambaonline.com/wp-content/uploads/2019/03/top-queer-sa-celebs_Bujy.jpg",
        bio:
        "bio and photos before deciding whether or not they should follow you. If your Instagram bio is enticing, users might decide to engage with your content or follow your account. If it isn’t, you might lose their interest… forever. Okay, well, maybe not forever but at least until you make some major changes. In this article, we’ll break down what a bio is, how to write one, and some cool Instagram bio tricks. But most importantly, we’ll give you some Instagram bio ideas that you can literally copy and paste onto your profile. (Don’t worry, we won’t tell anyone — it’ll be our little secret.) ",
        gender: "Male",
        DOB:"12-369-11"
    },
    {
      id: 3,
      name: "Cynthia",
      surname:"Maluleke",
      image:
        "http://img4.bdbphotos.com/images/230x300/7/q/7q8yk2xc3otmc23x.jpg?skj2io4l",
        bio:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ",
        gender: "Female",
        DOB:"12-369-11"
    },
    {
      id: 4,
      name: "Lunga",
      surname:"Tshabalala",
      image:
        "http://cdn.24.co.za/files/Cms/General/d/5780/f351bc550b9242938a58b851a74cf212.jpg",
        bio:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ",
        gender: "Male",
        DOB:"12-369-11"
    }
    ,
    {
      id: 4,
      name: "Celina",
      surname:"Jonsons",
      image:
        "https://www.all4women.co.za/wp-content/uploads/2017/03/14/maggie-647x395.jpg?x21828",
        bio:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ",
        gender: "Male",
        DOB:"12-369-11"
    },
    
  ];
 
   getEmployees(): Array<employees>{
    return this.employee;
  }
  addEmployee(v: any) {
    this.employee.push(v);
  }
  delete(id: any): any {
    this.employee.map((artist, index) => {
      if (artist.id === id) {
        this.employee.splice(index, 1);
      }
    });
  }
  getEmployeeById(id: number) {
    let tempArtist: employees;
    this.employee.map(a => {
      if (a.id == id) {
        tempArtist = a;
      }
    });
    return tempArtist;
  }
  updatEmployee(employee: employees) {
    this.employee.map((a, index) => {
      if (a.id === employee.id) {
      
        a.surname = employee.surname;
        a.image = employee.image;
        a.bio = employee.bio;
        a.gender = employee.gender;
        a.DOB = employee.DOB;
      }
    });
  }
  getBoiByID(id:number){
    let tempArtist: employees;
    this.employee.map(a => {
      if (a.id == id) {
        tempArtist = a;
      }
    });
    return tempArtist;
  }
}
