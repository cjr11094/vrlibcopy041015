#pragma strict

private var ray : Ray;
private var hit : RaycastHit;

var c1 : Color = Color.yellow;
var c2 : Color = Color.red;
var lengthOfLineRenderer : int = 2;

	function Start() {
/*		 var lineRenderer : LineRenderer = gameObject.AddComponent.<LineRenderer>();
		 lineRenderer.material = new Material (Shader.Find("Particles/Additive"));
		 lineRenderer.SetColors(c1, c2);
		 lineRenderer.SetWidth(0.2,0.2);
		 lineRenderer.SetVertexCount(lengthOfLineRenderer);*/
	}

function Update () {

/*	ray = GetComponent.<Camera>().main.ScreenPointToRay(Input.mousePosition);
	Debug.Log("we're here");
	if(Physics.Raycast(ray,hit)){
	
		Debug.Log("did we get here?");
		var lineRenderer : LineRenderer = GetComponent.<LineRenderer>();
		for(var i : int = 0; i < lengthOfLineRenderer; i++) {
			if(i==1){
				lineRenderer.SetPosition( i, Vector3(hit.point.x,hit.point.y,hit.point.z) );
			} else {
				lineRenderer.SetPosition( i, Vector3(0,1,18) );
			}

		}
	}*/
}
