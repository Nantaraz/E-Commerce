import React, { useState } from 'react';
//import "./Accueil.css"
//import 'bootstrap/dist/css/bootstrap.min.css'
import images from "./images.jpeg"
// import image2 from "./logo.jpg"

const Accueil = props => {
    
        const initialFormState = { depart: '', arrive: ''}
        const [ user, setUser ] = useState(initialFormState);
    
        return (
            <center>
                {/* <div className=" responsive-font-size">
                    <h3 className="ba">Tolotra manampy anao amin'ny fitadiavana taxi farany tsotra sy azo antoka</h3>
                    <p>“Ny taxi no manatona anao any amin'ny toerana izay misy anao”</p>
                    <p>Manasa anao mba iditra ao amin'ny menu tompoko</p>
                    <img src={image2} width="270px" height="130px"/>
                </div> */}
                <div className="bb">
                    <img src={images} width="80%" height="330px" alt=""/>
                </div>

                <form
			onSubmit={event => {
				event.preventDefault()
				if (!user.depart || !user.arrive) return 
				setUser(initialFormState)	
				
			}}
		>
	<div className="aaa table-responsive">
		<center >
		
			<table>
				<tbody>
					<tr>
					
						<td>
							
							<select id='aaaa' className='l' aria-label="Selectez vos produits préférés">
                                <option >Selectez vos produits préférés</option>
                                <option value="1">Chaussure</option>
                                <option value="2">Jean</option>
                                <option value="3">Tee-Shirt</option>
                                <option value="4">Cravatte</option>
                                <option value="5">Chemise</option>
                                <option value="6">Voiture</option>
                                <option value="7">Jupe</option>
                               
</select>
						</td>
					</tr>
					<tr>
						
						<td>
						
							
						
                           
                         
							<div id="mi" class="nan">
							</div>
						</td>
					</tr>
					
				</tbody>
			</table>
			
            <button class="btn btn-primary mian" 
            // onClick = {()=>{
            //     document.getElementById('cccc').innerHTML="";
			// 	var x1 = document.getElementById("aaaa").value;
            //     var y1 = document.getElementById("bbbb").value;
            //     var tab = ['taxi Ankatso-Anosizato </br> n°: 1342TAF </br> tél: 039 17 135 20','taxi Analamahitsy-Ampasapito </br> n°: 8735GAT </br> tél: 033 90 128 61']
            // for(var i=1;i<=x1.length;i++) {
            //     for(var j=1;j<=y1.length;j++) {
            //         if(x1[1]===y1[j]){
            //                 console.log(document.getElementById('cccc').innerHTML =tab[0])
            //     } else if(x1[2]===y1[j]) {
            //         console.log(document.getElementById('cccc').innerHTML =tab[1])
            //     }

            //     else if(x1[3]===y1[j]) {
            //         console.log(document.getElementById('cccc').innerHTML =tab[2])
            //     }
            
            
            // }}

			// }} 
			>Valider</button>
			<div id='cccc'></div>
		</center>	
	</div>	
	</form>


            </center>
        )
        
      
    
}
export default  Accueil