import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class DisplayListComponent implements OnInit {

  listObject: Array<any> =[];
  classDefinition: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getData().subscribe((data: any) => {
      this.listObject = data.results
    })
  }

  public viewDetails(classDescription: string) {
    this.getDataForClass(classDescription).subscribe((data) => {
      console.log('data', data)
      this.classDefinition = data
    })
  }

  public getData(){
    // getting a Cors Policy error when running from local host for the https://dog.ceo/dog-api/documentation/ url
    // using https://www.dnd5eapi.co/api/ instead to demonstrate
    return this.httpClient.get(`https://www.dnd5eapi.co/api/classes/`);
  }

  
  public getDataForClass(classDescription: string){
    return this.httpClient.get(`https://www.dnd5eapi.co/api/classes/${classDescription}`);
  }

}
