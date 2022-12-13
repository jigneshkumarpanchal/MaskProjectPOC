import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { async, delay, forkJoin, Observable, timer } from 'rxjs';
import { map, mergeMap, subscribeOn, switchMap } from 'rxjs/operators';
import * as fs from 'fs';
import {enableProdMode} from '@angular/core';


enableProdMode();
//import * as VideoFrame from 'src/assets/VideoFrame.js';
declare var $: any;
declare const VideoFrame: any;
declare var MaskingSelected:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[`
  h3{
    color : pink;
  }
  `]
})
export class AppComponent implements OnInit
 {
  public span: string;
  title = 'my-first-app';
  Name="Spherex"
  private httpClient: HttpClient;

  constructor(http: HttpClient) 
  {
    this.httpClient = http;
  }

  ngOnInit()  
  {  
  
    $(document).ready(async () => {  
   
     var framerate=24;    
     var filenames = [];
     
       /*  filenames.push('6_gun_1.txt')
     filenames.push('20_glass_1.txt')
     filenames.push('21_gun_1.txt')
     filenames.push('22_glass_1.txt')
     filenames.push('23_glass_1.txt')
     filenames.push('24_glass_1.txt')
     filenames.push('24_gun_1.txt')
     filenames.push('25_glass_1.txt')
     filenames.push('26_glass_1.txt')
     filenames.push('26_gun_1.txt')
     filenames.push('27_glass_1.txt')
     filenames.push('27_gun_1.txt')
     filenames.push('41_alcohol_1.txt')
     filenames.push('42_alcohol_1.txt')
     filenames.push('42_gun_1.txt')
     filenames.push('44_alcohol_1.txt')
     filenames.push('44_glass_1.txt')
     filenames.push('45_alcohol_1.txt')
     filenames.push('45_alcohol_2.txt')
     filenames.push('45_alcohol_3.txt')
     filenames.push('45_glass_1.txt')
     filenames.push('45_glass_2.txt')
     filenames.push('45_glass_3.txt')
     filenames.push('46_alcohol_1.txt')
     filenames.push('46_alcohol_2.txt')
     filenames.push('46_alcohol_3.txt')
     filenames.push('46_glass_1.txt')
     filenames.push('46_glass_2.txt')
     filenames.push('46_gun_1.txt')
     filenames.push('47_alcohol_1.txt')
     filenames.push('47_alcohol_2.txt')
     filenames.push('47_glass_1.txt')
     filenames.push('47_glass_2.txt')
     filenames.push('47_glass_3.txt')
     filenames.push('47_glass_4.txt')
     filenames.push('47_glass_5.txt')
     filenames.push('48_alcohol_1.txt')
     filenames.push('48_alcohol_2.txt')
     filenames.push('48_glass_1.txt')
     filenames.push('48_glass_2.txt')
     filenames.push('48_glass_3.txt')
     filenames.push('48_glass_4.txt')
     filenames.push('48_glass_5.txt')
     filenames.push('49_alcohol_1.txt')
     filenames.push('49_alcohol_2.txt')
     filenames.push('49_alcohol_3.txt')
     filenames.push('49_glass_1.txt')
     filenames.push('49_glass_2.txt')
     filenames.push('49_gun_1.txt')
     filenames.push('50_glass_1.txt')
     filenames.push('50_gun_1.txt')
     filenames.push('51_glass_1.txt')
     filenames.push('53_gun_1.txt')
     filenames.push('75_gun_1.txt')
     filenames.push('75_gun_2.txt')  */
      filenames.push('266_alcohol_1.txt')
   /*  filenames.push('266_glass_1.txt')
     filenames.push('266_glass_2.txt')
     filenames.push('266_glass_3.txt')
     filenames.push('266_glass_4.txt')
     filenames.push('267_alcohol_1.txt')
     filenames.push('267_glass_1.txt')
     filenames.push('267_glass_2.txt')
     filenames.push('267_glass_3.txt')
     filenames.push('268_alcohol_1.txt')
     filenames.push('268_glass_1.txt')
     filenames.push('268_glass_2.txt')
     filenames.push('268_glass_3.txt')
     filenames.push('271_glass_2.txt')
     filenames.push('271_glass_3.txt')
     filenames.push('271_glass_4.txt')
     filenames.push('271_glass_5.txt')
     filenames.push('272_alcohol_1.txt')
     filenames.push('272_alcohol_2.txt')
     filenames.push('272_glass_1.txt')
     filenames.push('272_glass_2.txt')
     filenames.push('272_glass_3.txt')
     filenames.push('272_glass_4.txt')
     filenames.push('273_alcohol_1.txt')
     filenames.push('273_alcohol_2.txt')
     filenames.push('273_glass_1.txt')
     filenames.push('273_glass_2.txt')
     filenames.push('273_glass_3.txt')
     filenames.push('273_glass_4.txt')
     filenames.push('274_alcohol_1.txt')
     filenames.push('274_alcohol_2.txt')
     filenames.push('274_glass_1.txt')
     filenames.push('274_glass_2.txt')
     filenames.push('274_glass_3.txt')
     filenames.push('274_glass_4.txt')
     filenames.push('274_glass_5.txt')
     filenames.push('275_alcohol_1.txt')
     filenames.push('275_alcohol_2.txt')
     filenames.push('275_alcohol_3.txt')
     filenames.push('275_glass_1.txt')
     filenames.push('275_glass_2.txt')
     filenames.push('275_glass_3.txt')
     filenames.push('275_glass_4.txt')
     filenames.push('275_glass_5.txt')
     filenames.push('276_alcohol_1.txt')
     filenames.push('276_alcohol_2.txt')
     filenames.push('276_glass_1.txt')
     filenames.push('276_glass_2.txt')
     filenames.push('276_glass_3.txt')
     filenames.push('276_glass_4.txt')
     filenames.push('276_glass_5.txt')
     filenames.push('277_alcohol_1.txt')
     filenames.push('277_alcohol_2.txt')
     filenames.push('277_glass_1.txt')
     filenames.push('277_glass_2.txt')
     filenames.push('277_glass_3.txt')
     filenames.push('277_glass_4.txt')
     filenames.push('277_glass_5.txt')
     filenames.push('278_alcohol_1.txt')
     filenames.push('278_alcohol_2.txt')
     filenames.push('278_glass_1.txt')
     filenames.push('278_glass_2.txt')
     filenames.push('278_glass_3.txt')
     filenames.push('278_glass_4.txt')
     filenames.push('278_glass_5.txt')
     filenames.push('279_alcohol_1.txt')
     filenames.push('279_alcohol_2.txt')
     filenames.push('279_alcohol_3.txt') 
     filenames.push('279_glass_1.txt')
     filenames.push('279_glass_2.txt')
     filenames.push('279_glass_3.txt')
     filenames.push('279_glass_4.txt')
     filenames.push('279_glass_5.txt')
     filenames.push('280_alcohol_1.txt')
     filenames.push('280_alcohol_2.txt')
     filenames.push('280_alcohol_3.txt')
     filenames.push('280_glass_1.txt')
     filenames.push('280_glass_2.txt')
     filenames.push('280_glass_3.txt')
     filenames.push('280_glass_4.txt')
     filenames.push('281_alcohol_1.txt')
     filenames.push('281_alcohol_2.txt')
     filenames.push('281_alcohol_3.txt')
     filenames.push('281_glass_1.txt')
     filenames.push('281_glass_2.txt')
     filenames.push('281_glass_3.txt')
     filenames.push('281_glass_4.txt')
     filenames.push('282_alcohol_1.txt')
     filenames.push('282_alcohol_2.txt')
     filenames.push('282_glass_1.txt')
     filenames.push('282_glass_2.txt')
     filenames.push('282_glass_3.txt')
     filenames.push('282_glass_4.txt')
     filenames.push('283_alcohol_1.txt')
     filenames.push('283_alcohol_2.txt')
     filenames.push('283_glass_1.txt')
     filenames.push('283_glass_2.txt')
     filenames.push('283_glass_3.txt')
     filenames.push('283_glass_4.txt')
     filenames.push('284_alcohol_1.txt')
     filenames.push('284_alcohol_2.txt')
     filenames.push('284_alcohol_3.txt')
     filenames.push('284_glass_1.txt')
     filenames.push('284_glass_2.txt')
     filenames.push('284_glass_3.txt')
     filenames.push('284_glass_4.txt')
     filenames.push('286_alcohol_1.txt')
     filenames.push('286_alcohol_2.txt')
     filenames.push('286_alcohol_3.txt')
     filenames.push('286_alcohol_4.txt')
     filenames.push('286_glass_1.txt')
     filenames.push('286_glass_2.txt')
     filenames.push('286_glass_3.txt')
     filenames.push('286_glass_4.txt') 
     filenames.push('315_glass_1.txt')
     filenames.push('315_glass_2.txt')
     filenames.push('315_glass_3.txt')
     filenames.push('316_glass_1.txt')
     filenames.push('316_glass_2.txt')
     filenames.push('316_glass_3.txt')
     filenames.push('317_glass_1.txt')
     filenames.push('317_glass_2.txt')
     filenames.push('317_glass_3.txt')
     filenames.push('317_gun_1.txt')
     filenames.push('318_glass_1.txt')
     filenames.push('318_glass_2.txt')
     filenames.push('318_glass_3.txt')
     filenames.push('318_gun_1.txt')
     filenames.push('318_gun_2.txt')
     filenames.push('319_glass_1.txt')
     filenames.push('319_glass_2.txt')
     filenames.push('319_glass_3.txt')
     filenames.push('319_gun_1.txt')
     filenames.push('320_glass_1.txt')
     filenames.push('320_glass_2.txt')
     filenames.push('321_glass_1.txt')
     filenames.push('321_glass_2.txt')
     filenames.push('321_glass_3.txt')
     filenames.push('321_glass_4.txt')
     filenames.push('321_gun_1.txt')
     filenames.push('321_gun_2.txt')
     filenames.push('322_glass_1.txt')
     filenames.push('322_glass_2.txt')
     filenames.push('322_glass_3.txt')
     filenames.push('322_glass_4.txt')
     filenames.push('323_glass_1.txt')
     filenames.push('323_glass_2.txt')
     filenames.push('323_glass_3.txt')
     filenames.push('323_glass_4.txt')
     filenames.push('324_glass_1.txt')
     filenames.push('324_glass_2.txt')
     filenames.push('324_glass_3.txt')
     filenames.push('325_alcohol_1.txt')
     filenames.push('325_glass_1.txt')
     filenames.push('325_glass_2.txt')
     filenames.push('326_glass_1.txt')
     filenames.push('326_glass_2.txt')
     filenames.push('326_gun_1.txt') 
     filenames.push('327_alcohol_1.txt')
     filenames.push('327_glass_1.txt')
     filenames.push('327_glass_2.txt')
     filenames.push('327_glass_3.txt')
     filenames.push('327_gun_1.txt')
     filenames.push('328_glass_1.txt')
     filenames.push('328_glass_2.txt')
     filenames.push('329_glass_1.txt')
     filenames.push('329_glass_2.txt')
     filenames.push('329_gun_1.txt')
     filenames.push('330_glass_1.txt')
     filenames.push('330_glass_2.txt')
     filenames.push('330_gun_1.txt')
     filenames.push('331_glass_1.txt')
     filenames.push('331_glass_2.txt')
     filenames.push('331_gun_1.txt')*/
      // console.log(filenames);
  
      var datastore=[];   
      var newfileno=[];
      var colorOfObject=[];  
   
      const requests = filenames.map(file => this.httpClient.get(`assets/firstvideomask/${file}`, {responseType: 'text'}));
        forkJoin(requests).subscribe((responseArr) => {    
              datastore.push(responseArr)              
      });

      //console.log(datastore);
   
      for(let ii=0; ii<filenames.length; ii++)
        {
            newfileno.push(filenames[ii].split('_')[0]);
            if(filenames[ii].split('_')[1]=='gun')
            {
              colorOfObject.push('lime');
            }
            else
            {
              colorOfObject.push('green');//'#99FFFF');
            }            
        }

       //console.log(filenames)
       // console.log(newfileno);
   
      var noofobjectsinsideOneFrame =[];
      noofobjectsinsideOneFrame= newfileno.reduce((accumulator, value) => {
        return {...accumulator, [value]: (accumulator[value] || 0) + 1};
      }, {});


      var loopno=0;
      var currentFrame = $('#currentFrame');
      var variationvalue: any=0;
      var fristtimecounter=true;
                    
      var  video = VideoFrame({
          id : 'video',
          frameRate:framerate,
          callback :  function(frame: number) {
                              /*  if(frame%20==0)   //20                   
                        {
                           $('#dataContainer').html('');                      
                        }       */
                          $('#dataContainer').html('');
                          if(fristtimecounter==true)
                           {                         
                              var frameCounter = (time: any, metadata: { mediaTime: number; }) => {
                              let count = metadata.mediaTime * 22.50;                            
                             if(fristtimecounter==true)
                              {
                               variationvalue=Math.round(count)-1;                              
                               //console.log('variationvalue' + variationvalue);
                               fristtimecounter=false;
                              }                           
                              video.video.requestVideoFrameCallback(frameCounter);
                            }
                            video.video.requestVideoFrameCallback(frameCounter)  
                          }   

                          currentFrame.html(frame);        
                                         
                          var no=parseInt(newfileno[loopno]) + parseInt(variationvalue);                                                     
                          if(frame==no && variationvalue>0)
                          {                          
                          
                           /*  $('#dataContainer').html('<svg height="'+ 720 + '" width="1280"><polygon points=" '+ datastore[0][loopno] +'" style="fill:' + colorOfObject[loopno] + ';stroke:'+ colorOfObject[loopno] + ';stroke-width:1" /></svg>');
                            
                            video.video.pause();
                              loopno=loopno+1;  */
                             
                           var howmanyobjectsinsideframe=noofobjectsinsideOneFrame[parseInt(newfileno[loopno])];
                                    
                          /*  $("#dataContainer").css ({
                                               
                           // "-webkit-backdrop-filter": "blur(3px)",
                          "backdrop-filter": "blur(3px)"
                         
                         })   */
                        // $("#dataContainer").addClass('filterclass');
                            for(var innerloop=1;innerloop<=howmanyobjectsinsideframe;innerloop++)
                                   { 
                                     /*   if( $.MaskingSelected==true)
                                     {  */

                                         var txt3 = document.createElement("div");                                     
                                              


                                                                   
                                            
                                              //final                                         
                                                  
                                            //txt3.innerHTML = '<svg style="position: absolute;-webkit-backdrop-filter: blur(1.9px); backdrop-filter: blur(1.9px);" height="'+ 720 + '" width="1280"><polygon points=" '+ datastore[0][loopno] +'"  style="fill:rgba(255, 255, 255,0.3);stroke:rgba(255, 255, 255,1);stroke-width:0.1" /></svg>';                       
                                              // txt3.innerHTML = '<svg style="position: absolute;-webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px);" height="'+ 720 + '" width="1280"><polygon points=" '+ datastore[0][loopno] +'"  style="fill:rgba(255, 255, 255,0.01);stroke:'+ colorOfObject[loopno] + ';stroke-width:1" /></svg>';
                                               //txt3.innerHTML = '<svg style="position: absolute;-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px);" height="'+ 720 + '" width="1280"><polygon points=" '+ datastore[0][loopno] +'"  style="fill:rgba(255, 255, 255,0.01);" /></svg>';
                                              //  txt3.innerHTML = '<svg style="position: absolute;" height="'+ 720 + '" width="1280"><polygon points=" '+ datastore[0][loopno] +'" style="fill:' + colorOfObject[loopno] + ';stroke:'+ colorOfObject[loopno] + ';stroke-width:1" /></svg>';
                                              
                                             txt3.innerHTML = '<svg style="position: absolute;backdrop-filter: blur(5px);"  height="'+ 720 + '" width="1280"><g><polygon points=" '+ datastore[0][loopno] +'" style="fill:rgba(255, 255, 255,0.001);stroke:'+ colorOfObject[loopno] + ';stroke-width:0" /></g></svg>';
                                              
                                            //txt3.innerHTML = '<svg   height="'+ 720 + '" width="1280"><g><polygon id="svgTextPath" points=" '+ datastore[0][loopno] +'" style="position: absolute; left: 10px; clip-path: url(#svgTextPath);filter: blur(10px);top: 10px;fill:rgba(255, 255, 255,0.001);stroke:'+ colorOfObject[loopno] + ';stroke-width:0" /></g></svg>';
                                              
                                           
                                            
                                            
                                         

                                            // txt3.className='filterclass';
                                               $("#dataContainer").append(txt3); 
                                                 

                                              //document.getElementById('blueDIV').className='blueDIV';

                                               var bodyStyles = document.getElementById('blueDIV').style;

bodyStyles.setProperty('position','absolute');
bodyStyles.setProperty('width', '4000px');
  bodyStyles.setProperty('height', '400px');
  bodyStyles.setProperty('clip-path', 'polygon(50% 0%, 0% 100%, 100% 100%)');
  //bodyStyles.setProperty('clip-path', 'polygon(50% 0%,0% 100%,100% 100+02%)');
  //console.log(datastore[0][loopno]);
  //bodyStyles.setProperty('clip-path', 'polygon(" '+datastore[0][loopno] + '")');    
  //clip-path: polygon(50% 0%, 0% 100%, 100% 100%);                                        
                                             video.video.pause();

                                              // txt3=null;
                                                // }
                                                /*  else
                                                {
                                                  console.log("Not sellecctting");
                                                }  */
                                                // $('#dataContainer').html('<svg height="'+ 720 + '" width="1280"><polygon points=" '+ datastore[0][loopno] +'" style="fill:' + colorOfObject[loopno] + ';stroke:'+ colorOfObject[loopno] + ';stroke-width:1" /></svg>');
                                        
                                             
                                             
                                                //video.video.pause();
                                                // console.log(newfileno[loopno]);
                                                loopno=loopno+1;                                      
                                   } 
                                  // video.video.pause();
                                 }                   
                        }                        
});


  //var canvas = document.getElementById('canvas')  as HTMLCanvasElement | null;let ctx = canvas?.getContext('2d'),
    
function draw() {  
  // ctx.beginPath(); 
        


//ctx.filter = 'none';
 // ctx.fillStyle = 'rgba(0,255,0,0.9)';

$('#canvas').css({
//$("canvas11").css({
"-webkit-backdrop-filter": "blur(10px)",
  "backdrop-filter": "blur(10px)"
})        

//ctx.fillText('green',x,16,160);
//$("canvas").css({"color": "red", "border": "2px solid red"});
   //ctx.closePath();          
 // x = x + 0.2;// 1.2; */
}

//draw();
    $('#play-pause').click(function()
    {
      if($('#MaskSelected').prop("checked") == true){
      $.MaskingSelected=true;
        console.log("Checkbox is checked.");
    }
    else
    {
      $.MaskingSelected=false;
      console.log("Checkbox is not checked.");
    }
        if(video.video.paused){
          
            video.video.play();                  
            video.video.frameRate=framerate;
            video.listen('frame');
            $(this).html('Pause');
        }else{
          alert("hi");
            video.video.pause();
            video.stopListen();
            $(this).html('Play');
        }
    });
    
    });  
  }  
}