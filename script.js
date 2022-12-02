function accordion() {
	type("accordion");
	let html = document.getElementById("content").innerHTML = `
<div class="accordion" id="accordion">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
  </div>
  </div>
</div>`;
//	document.getElementById("btn").className = "btn btn-primary";
}
function Alerts() {
	type("Alert");
	console.log("Printed")
}

function type(fname){
	let tfa = ["accordion", "flush-","accordion-flush"];
	if(fname == "accordion"){
			let tcomps = `<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    						Type
  					</button>
  					<ul class="dropdown-menu dropdown-menu-dark" id="tcontent">
    					<li><a class="dropdown-item" onclick="def()">default</a></li>
    		  			<li><a class="dropdown-item" onclick="flush()">Flush</a></li>
    				</ul>

    				<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    						Always open
  					</button>
  					<ul class="dropdown-menu dropdown-menu-dark" id="tacontent">
    					<li><a class="dropdown-item" onclick="def()">True</a></li>
    		  			<li><a class="dropdown-item" onclick="flush()">False</a></li>
    				</ul>

    				`
	document.getElementById('components').innerHTML += tcomps;

	}else{
		tcomps = ``;
		console.log("unexpected")
	}
}
function flush() {
    	document.getElementById("accordion").classList.add("accordion-flush");
    	//document.getElementById("accordion").classList.add(tfa[2]);
    	console.log(document.getElementById("accordion").className);
    	console.log("success");
   }
function def () {
	document.getElementById("accordion").className = "accordion"
	console.log("success")
}