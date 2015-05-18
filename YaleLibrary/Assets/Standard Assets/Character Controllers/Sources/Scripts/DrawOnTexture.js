#pragma strict

var tex : Texture2D;
//var newText : Texture2D;
private var ray : Ray;
private var hit : RaycastHit;
public var rend : Renderer;
public var DotPrefab : Transform;


function Start () {
	rend = gameObject.GetComponent("Renderer");
}

function Update () {

	if(Input.GetMouseButton(0)){
	
		ray = GetComponent.<Camera>().main.ScreenPointToRay(Input.mousePosition);
	
		if(Physics.Raycast(ray,hit)){
			Debug.Log("it hit");
			Debug.Log(hit.point.x);
			Debug.Log(hit.point.y);
			Debug.Log(hit.point.z);
			Debug.Log(hit.collider);
			var newPosition = hit.point;
			Instantiate(DotPrefab,newPosition,Quaternion.identity);
			//tex.SetPixel(hit.point.x,hit.point.y,Color.black);
			//tex.Apply();
		}
		Debug.Log(Input.mousePosition.x + " this is x");
		Debug.Log(Input.mousePosition.y + " this is y");
		Debug.Log(Input.mousePosition.z + " this is z");
	}

}