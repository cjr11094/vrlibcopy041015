#pragma strict

function Start () {

}

function Update () {

	if(Input.GetKeyDown("t")){
		Debug.Log("pressing t");
		//Translate(Vector3.forward * Time.deltaTime*30);
		transform.position += (Vector3(-1,0,0) * Time.deltaTime * 30);
	}
	if(Input.GetKeyDown("f")){
		Debug.Log("pressing t");
		//transform.Translate(Vector3.back * Time.deltaTime*10);
		transform.position += (Vector3(0,0,-1) * Time.deltaTime * 30);
	}
	if(Input.GetKeyDown("g")){
		Debug.Log("pressing g");
		//transform.Translate(Vector3.back * Time.deltaTime*30);
		transform.position += (Vector3(1,0,0) * Time.deltaTime * 30);
	}
	if(Input.GetKeyDown("h")){
		Debug.Log("pressing t");
	//	transform.Translate(Vector3.forward * Time.deltaTime*10);
		transform.position += (Vector3(0,0,1) * Time.deltaTime * 30);
	}
}

function moveLight(){

	while(Input.GetKeyDown("t")) transform.position.x += 1;
	while(Input.GetKeyDown("f")) transform.position.z += 1;
	while(Input.GetKeyDown("g")) transform.position.z -= 1;
	while(Input.GetKeyDown("h")) transform.position.x -= 1;

}