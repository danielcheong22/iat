define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

return iatExtension({
		category1 : {
			name : 'Minorities', //Will appear in the data.
			title : {
				media : {word : 'Minorities'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'https://raw.githubusercontent.com/danielcheong22/iat/59913e6ef49fc7f6e1b6a105151d03369fd260a4/images/Minorities1.png'},
			{image : 'Minorities2.png'},
			{image : 'Minorities3.jpg'}, 
		    	{image : 'Minorities4.png'}, 
    			{image : 'Minorities5.png'}, 
    			{image : 'Minorities6.png'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Chinese', //Will appear in the data.
			title : {
				media : {word : 'Chinese'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'Chinese1.png'},
			{image : 'Chinese2.png'},
			{image : 'Chinese3.jpg'},
			{image : 'Chinese4.jpg'},
		    	{image : 'Chinese5.png'},
       			{image : 'Chinese6.jpg'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://danielcheong22.github.io/iat/images/'
		} 
	});
});
