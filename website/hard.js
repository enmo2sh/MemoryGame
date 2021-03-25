var array = ['1.jpg','1.jpg','2.jpg','2.jpg','3.jpg','3.jpg','4.jpg','4.jpg','5.jpg','5.jpg','6.jpg','6.jpg','7.jpg','7.jpg','8.jpg','8.jpg','9.jpg','9.jpg','10.jpg','10.jpg','11.jpg','11.jpg','12.jpg','12.jpg','13.jpg','13.jpg','14.jpg','14.jpg','15.jpg','15.jpg','16.jpg','16.jpg','17.jpg','17.jpg','18.jpg','18.jpg','19.jpg','19.jpg','20.jpg','20.jpg','21.jpg','21.jpg','22.jpg','22.jpg','23.jpg','23.jpg','24.jpg','24.jpg'];
var array2 = ['1.mp3','1.mp3','2.mp3','2.jpg','3.mp3','3.mp3','4.mp3','4.mp3','5.mp3','5.mp3','6.mp3','6.mp3','7.mp3','7.mp3','8.mp3','8.mp3','9.mp3','9.mp3','10.mp3','10.mp3','11.mp3','11.mp3','12.mp3','12.mp3','13.mp3','13.mp3','14.mp3','14.mp3','15.mp3','15.mp3','16.mp3','16.mp3','17.mp3','17.mp3','18.mp3','18.mp3','19.mp3','19.mp3','20.mp3','20.mp3','21.mp3','21.mp3','22.mp3','22.mp3','23.mp3','23.mp3','24.mp3','24.mp3'];
var index = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48];

var i1;
var i2;
var count=1;
var end=0;
var h;
var active=false;
var i3,i4;

function shuffleArray(){
	count=1;
	i1=0;
	i2=0;
	active=true;
	start();
  
   for(var a=1;a<49;a++){
      document.getElementById("image"+a) .src="main.jpg" ;
   }
   
   for(var i=array.length-1;i>0;i--){
      var j =Math.floor(Math.random()*(i+1));
      var temp = array[i];
      array[i]=array[j];
      array[j]=temp;
      
      temp = array2[i];
      array2[i]=array2[j];
      array2[j]=temp;
      
      temp=index[i];
      index[i]=index[j];
      index[j]=temp;
      
   }
   console.log(array);
   console.log(index);
  
}

function checkpair(i1,i2){
   if((i1==1 && i2==2) || (i1==2 && i2==1) || (i1==3 && i2==4)|| (i1==4 && i2==3) || (i1==5 && i2==6) || (i1==6 && i2==5) ||(i1==7 && i2==8) || (i1==8 && i2==7) || (i1==9 && i2==10) || (i1==10 && i2==9) || (i1==11 && i2==12) || (i1==12 && i2==11) ||   (i1==13 && i2==14) || (i1==14 && i2==13) || (i1==15 && i2==16) || (i1==16 && i2==15) || (i1==17 && i2==18) || (i1==18 && i2==17) ||(i1==19 && i2==20) || (i1==20 && i2==19) || (i1==21 && i2==22)|| (i1==22 && i2==21) || (i1==23 && i2==24) || (i1==24 && i2==23) ||(i1==25 && i2==26) || (i1==26 && i2==25) || (i1==27 && i2==28) || (i1==28 && i2==27) || (i1==29 && i2==30) || (i1==30 && i2==29) ||(i1==31 && i2==32) || (i1==32 && i2==31) || (i1==33 && i2==34) || (i1==34 && i2==33) || (i1==35 && i2==36) || (i1==36 && i2==35) || (i1==37 && i2==38) || (i1==38 && i2==37) || (i1==39 && i2==40) || (i1==40 && i2==39) || (i1==41 && i2==42) || (i1==42 && i2==41) || (i1==43 && i2==44) || (i1==44 && i2==43) || (i1==45 && i2==46) || (i1==46 && i2==45) || (i1==47 && i2==48) || (i1==48 && i2==47))
      return true;
   else
   return false;
}

function flipback(){
	document.getElementById("image"+i3) .src="main.jpg" ;	
	document.getElementById("image"+i4) .src="main.jpg" ;
}

function newpic1(){
document.getElementById("image1") .src=array[0] ;
	if (count%2==1){
		i1=index[0];
		i3=1;
		count++;
	}
	else{
		i2=index[0];
		i4=1;
		count++;
      if(!checkpair(i1,i2))
			setTimeout(flipback, 500);
      
	   else{
		    end++;
			var audio = new Audio(array2[0]);
                audio.play();
		}	
	}
}
function newpic2(){  
document.getElementById("image2").src=array[1];
	if (count%2==1){
		i1=index[1];
		i3=2;
		count++;
	}
	else{
		i2=index[1];
		i4=2;
		count++;
      if(!checkpair(i1,i2))
			setTimeout(flipback, 500);
	    else{
		    end++;
			var audio = new Audio(array2[1]);
                audio.play();
		}	
	}
}
function newpic3(){
document.getElementById("image3") .src=array[2] ;
	if (count%2==1){
		i1=index[2];
		count++;
		i3=3;
	}
	else{
		i2=index[2];
		i4=3;
		count++;
      if(!checkpair(i1,i2))
			setTimeout(flipback, 500);
	    else{
		    end++;
			var audio = new Audio(array2[2]);
                audio.play();
		}
	}
}
function newpic4(){
document.getElementById("image4") .src=array[3] ;
	if (count%2==1){
		i1=index[3];
		i3=4;
		count++;
	}
	else{
		i2=index[3];
		i4=4;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[3]);
                audio.play();
		}	
	    
	}
}
function newpic5(){
document.getElementById("image5") .src=array[4] ;
	if (count%2==1){
		i1=index[4];
		i3=5;
		count++;
	}
	else{
		i2=index[4];
		i4=5;
		count++;
      if(!checkpair(i1,i2))
   		setTimeout(flipback, 500);
		 else{
		    end++;
			var audio = new Audio(array2[4]);
                audio.play();
		}	
	}
}
function newpic6(){
document.getElementById("image6") .src=array[5] ;
	if (count%2==1){
		i1=index[5];
		i3=6;
		count++;
	}
	else{
		i2=index[5];
		i4=6;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
	    else{
		    end++;
			var audio = new Audio(array2[5]);
                audio.play();
		}
	}
}
function newpic7(){
document.getElementById("image7") .src=array[6];
	if (count%2==1){
		i1=index[6];
		i3=7;
		count++;
	}
	else{
		i2=index[6];
		i4=7;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[6]);
                audio.play();
		}	
	}
}
function newpic8(){
document.getElementById("image8") .src=array[7];
	if (count%2==1){
		i1=index[7];
		i3=8;
		count++;
	}
	else{
		i2=index[7];
		i4=8;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[7]);
                audio.play();
		}	
	}
}
function newpic9(){
document.getElementById("image9") .src=array[8] ;
	if (count%2==1){
		i1=index[8];
		i3=9;
		count++;
	}
	else{
		i2=index[8];
		i4=9;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[8]);
                audio.play();
      }	
	}
}
function newpic10(){
document.getElementById("image10") .src=array[9];
	if (count%2==1){
		i1=index[9];
		i3=10;
		count++;
	}
	else{
		i2=index[9];
		i4=10;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[9]);
                audio.play();
		}	
	}
}
function newpic11(){
document.getElementById("image11") .src=array[10];
	if (count%2==1){
		i1=index[10];
		i3=11;
		count++;
	}
	else{
		i2=index[10];
		i4=11;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		 else{
		    end++;
			var audio = new Audio(array2[10]);
                audio.play();
		}	
	}
}
function newpic12(){
document.getElementById("image12") .src=array[11];
	if (count%2==1){
		i1=index[11];
		i3=12;
		count++;
	}
	else{
		i2=index[11];
		i4=12;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[11]);
                audio.play();
		}	
	}
}
function newpic13(){
document.getElementById("image13") .src=array[12];
	if (count%2==1){
		i1=index[12];
		i3=13;
		count++;
	}
	else{
		i2=index[12];
		i4=13;
		count++;
      if(!checkpair(i1,i2))
   		setTimeout(flipback, 500);
		else{
		    end++;
          var audio = new Audio(array2[12]);
                audio.play();
		}	
	}
}
function newpic14(){
document.getElementById("image14") .src=array[13];
	if (count%2==1){
		i1=index[13];
		i3=14;
		count++;
	}
	else{
		i2=index[13];
		i4=14;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[13]);
                audio.play();
		}
	}
}
function newpic15(){
document.getElementById("image15") .src=array[14];
	if (count%2==1){
		i1=index[14];
		i3=15;
		count++;
	}
	else{
		i2=index[14];
		i4=15;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[14]);
                audio.play();
		}	
	}
}
function newpic16(){
document.getElementById("image16") .src=array[15];
	if (count%2==1){
		i1=index[15];
		i3=16;
		count++;
	}
	else{
		i2=index[15];
		i4=16;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[15]);
                audio.play();
		}	
	}
}
function newpic17(){
document.getElementById("image17") .src=array[16];
	if (count%2==1){
		i1=index[16];
		i3=17;
		count++;
	}
	else{
		i2=index[16];
		i4=17;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		
	   else{
		    end++;
			var audio = new Audio(array2[16]);
                audio.play();
		}	
	}
}
function newpic18(){  
document.getElementById("image18").src=array[17];
	if (count%2==1){
		i1=index[17];
		i3=18;
		count++;
	}
	else{
		i2=index[17];
		i4=18;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
	    else{
		    end++;
			var audio = new Audio(array2[17]);
                audio.play();
		}	
	}
}
function newpic19(){
document.getElementById("image19") .src=array[18];
	if (count%2==1){
		i1=index[18];
		i3=19;
		count++;
	}
	else{
		i2=index[18];
		i4=19;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
	    else{
		    end++;
			var audio = new Audio(array2[18]);
                audio.play();
		}	
	}
}
function newpic20(){
document.getElementById("image20") .src=array[19];
	if (count%2==1){
		i1=index[19];
		i3=20;
		count++;
	}
	else{
		i2=index[19];
		i4=20;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		 else{
		    end++;
			var audio = new Audio(array2[19]);
                audio.play();
		}	
	    
	}
}
function newpic21(){
document.getElementById("image21") .src=array[20] ;
	if (count%2==1){
		i1=index[20];
		i3=21;
		count++;
	}
	else{
		i2=index[20];
		i4=21;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		 else{
		    end++;
			var audio = new Audio(array2[20]);
                audio.play();
		}	
	}
}
function newpic22(){
document.getElementById("image22") .src=array[21];
	if (count%2==1){
		i1=index[21];
		i3=22;
		count++;
	}
	else{
		i2=index[21];
		i4=22;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
	    else{
		    end++;
			var audio = new Audio(array2[21]);
                audio.play();
		}
	}
}
function newpic23(){
document.getElementById("image23") .src=array[22];
	if (count%2==1){
		i1=index[22];
		i3=23;
		count++;
	}
	else{
		i2=index[22];
		i4=23;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[22]);
                audio.play();
		}	
	}
}
function newpic24(){
document.getElementById("image24") .src=array[23];
	if (count%2==1){
		i1=index[23];
		i3=24;
		count++;
	}
	else{
		i2=index[23];
		i4=24;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[23]);
                audio.play();
		}	
	}
}
function newpic25(){
document.getElementById("image25") .src=array[24] ;
	if (count%2==1){
		i1=index[24];
		i3=25;
		count++;
	}
	else{
		i2=index[24];
		i4=25;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[24]);
                audio.play();
		}	
	}
}
function newpic26(){
document.getElementById("image26") .src=array[25];
	if (count%2==1){
		i1=index[25];
		i3=26;
		count++;
	}
	else{
		i2=index[25];
		i4=26;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[25]);
                audio.play();
		}	
	}
}
function newpic27(){
document.getElementById("image27") .src=array[26];
	if (count%2==1){
      i1=index[26];
      i3=27;
		count++;
	}
	else{
		i2=index[26];
		i4=27;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		 else{
		    end++;
			var audio = new Audio(array2[26]);
                audio.play();
		}	
	}
}
function newpic28(){
document.getElementById("image28") .src=array[27];
	if (count%2==1){
		i1=index[27];
		i3=28;
		count++;
	}
	else{
		i2=index[27];
		i4=28;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[27]);
                audio.play();
		}	
	}
}
function newpic29(){
document.getElementById("image29") .src=array[28];
	if (count%2==1){
		i1=index[28];
		i3=29;
		count++;
	}
	else{
		i2=index[28];
		i4=29;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[28]);
                audio.play();
		}	
	}
}
function newpic30(){
document.getElementById("image30") .src=array[29];
	if (count%2==1){
		i1=index[29];
		i3=30;
		count++;
	}
	else{
		i2=index[29];
		i4=30;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[29]);
                audio.play();
		}
	}
}
function newpic31(){
document.getElementById("image31") .src=array[30];
	if (count%2==1){
		i1=index[30];
		i3=31;
		count++;
	}
	else{
		i2=index[30];
		i4=31;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[30]);
                audio.play();
		}	
	}
}
function newpic32(){
document.getElementById("image32") .src=array[31];
	if (count%2==1){
		i1=index[31];
		i3=32;
		count++;
	}
	else{
		i2=index[31];
		i4=32;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[31]);
                audio.play();
		}	
	}
}
function newpic33(){
document.getElementById("image33") .src=array[32] ;
	if (count%2==1){
		i1=index[32];
		i3=33;
		count++;
	}
	else{
		i2=index[32];
		i4=33;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[32]);
                audio.play();
		}	
	}
}
function newpic34(){
document.getElementById("image34") .src=array[33] ;
	if (count%2==1){
		i1=index[33];
		i3=34;
		count++;
	}
	else{
		i2=index[33];
		i4=34;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[33]);
                audio.play();
		}	
	}
}
function newpic35(){
document.getElementById("image35") .src=array[34];
	if (count%2==1){
		i1=index[34];
		i3=35;
		count++;
	}
	else{
		i2=index[34];
		i4=35;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[34]);
                audio.play();
		}	
	}
}
function newpic36(){
document.getElementById("image36") .src=array[35];
	if (count%2==1){
		i1=index[35];
		i3=36;
		count++;
	}
	else{
		i2=index[35];
		i4=36;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[35]);
                audio.play();
		}	
	}
}
function newpic37(){
document.getElementById("image37") .src=array[36];
	if (count%2==1){
		i1=index[36];
		i3=37;
		count++;
	}
	else{
		i2=index[36];
		i4=37;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[36]);
                audio.play();
		}	
	}
}
function newpic38(){
document.getElementById("image38") .src=array[37];
	if (count%2==1){
		i1=index[37];
		i3=38;
		count++;
	}
	else{
		i2=index[37];
		i4=38;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[37]);
                audio.play();
		}	
	}
}
function newpic39(){
document.getElementById("image39") .src=array[38];
	if (count%2==1){
		i1=index[38];
		i3=39;
		count++;
	}
	else{
		i2=index[38];
		i4=39;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[38]);
                audio.play();
		}	
	}
}
function newpic40(){
document.getElementById("image40") .src=array[39];
	if (count%2==1){
		i1=index[39];
		i3=40;
		count++;
	}
	else{
		i2=index[39];
		i4=40;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[39]);
                audio.play();
		}	
	}
}
function newpic41(){
document.getElementById("image41") .src=array[40];
	if (count%2==1){
		i1=index[40];
		i3=41;
		count++;
	}
	else{
		i2=index[40];
		i4=41;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[40]);
                audio.play();
		}	
	}
}
function newpic42(){
document.getElementById("image42") .src=array[41];
	if (count%2==1){
		i1=index[41];
		i3=42;
		count++;
	}
	else{
		i2=index[41];
		i4=42;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[41]);
                audio.play();
		}	
	}
}
function newpic43(){
document.getElementById("image43") .src=array[42];
	if (count%2==1){
		i1=index[42];
		i3=43;
		count++;
	}
	else{
		i2=index[42];
		i4=43;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[42]);
                audio.play();
		}	
	}
}
function newpic44(){
document.getElementById("image44") .src=array[43];
	if (count%2==1){
		i1=index[43];
		i3=44;
		count++;
	}
	else{
		i2=index[43];
		i4=44;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[43]);
                audio.play();
		}	
	}
}function newpic45(){
document.getElementById("image45") .src=array[44];
	if (count%2==1){
		i1=index[44];
		i3=45;
		count++;
	}
	else{
		i2=index[44];
		i4=45;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[44]);
                audio.play();
		}	
	}
}
function newpic46(){
document.getElementById("image46") .src=array[45];
	if (count%2==1){
		i1=index[45];
		i3=46;
		count++;
	}
	else{
		i2=index[45];
		i4=46;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[45]);
                audio.play();
		}	
	}
}
function newpic47(){
document.getElementById("image47") .src=array[46];
	if (count%2==1){
		i1=index[46];
		i3=47;
		count++;
	}
	else{
		i2=index[46];
		i4=47;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[46]);
                audio.play();
		}	
	}
}
function newpic48(){
document.getElementById("image48") .src=array[47];
	if (count%2==1){
		i1=index[47];
		i3=48;
		count++;
	}
	else{
		i2=index[47];
		i4=48;
		count++;
		if(!checkpair(i1,i2))
      	setTimeout(flipback, 500);
		else{
		    end++;
			var audio = new Audio(array2[47]);
                audio.play();
		}	
	}
}

function solve(){
	if(active){
	for(h=1;h<49;h++)
	      document.getElementById("image"+h) .src=array[h-1];
	}
	active=false;
}
function start(){
	total=0;
	var timervar=setInterval(countTimer,1000);
}

function countTimer(){
	if((active)&&(end!=24)){
	total++;
	var hour=Math.floor(total/3600);
	var min=Math.floor((total-hour*3600)/60);
	var sec=total-(hour*3600+min*60);
	}
	else{
	var hour=Math.floor(total/3600);
    var min=Math.floor((total-hour*3600)/60);
	var sec=total-(hour*3600+min*60);	
	}
	document.getElementById("timer").innerHTML=hour+":"+min+":"+sec;
}
