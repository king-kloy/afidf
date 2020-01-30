 import React from 'react'
 import $ from 'jquery'
 
 
 class script extends React.Component{
     render(){
         return(
            $(window).on('scroll', function () {
                if($(window).scrollTop()){
                    $('nav').addClass('black');
                }
                else{
                    $('nav').removeClass('black'); 
                }
            })

         )
     }
 }

 export default script;
  