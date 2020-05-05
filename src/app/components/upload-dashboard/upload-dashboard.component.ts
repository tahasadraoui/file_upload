import { Component, OnInit } from '@angular/core';

import * as $ from "jquery";

@Component({
  selector: 'app-upload-dashboard',
  templateUrl: './upload-dashboard.component.html',
  styleUrls: ['./upload-dashboard.component.scss']
})
export class UploadDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function(){
      $(".files").attr('data-before',"Drag file here or click the above button");
      $('input[type="file"]').change(function(e){
      let file = (<HTMLInputElement>e.target).files[0];
      var fileName = file.name;
      $(".files").attr('data-before',fileName);
      
      });
      });
  }

  onApply():void{
    console.log("Apply success");
    

  }

}
