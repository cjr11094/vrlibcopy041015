using UnityEngine;
using System.Collections;

public class UnbreakableCollider : MonoBehaviour {
	public Transform DotPrefab;
	Vector3 lastDotPosition;
	bool lastPointExists;
	
	
	void Start()
	{
//		DotPrefab=Instantiate (DotPrefab, new Vector3 (0, 0, 0), Quaternion.identity);
		lastPointExists = false;
	}
	void Update()
	{
		if (Input.GetMouseButton(0))
		{
			Debug.Log("Left mouse button clicked");
			Debug.Log("is it not saving?");
			Ray mouseRay = Camera.main.ScreenPointToRay(Input.mousePosition);
			Debug.DrawRay(mouseRay.origin,mouseRay.direction*10,Color.green);
			Vector3 newDotPosition = mouseRay.origin - mouseRay.direction / mouseRay.direction.y * mouseRay.origin.y;
//			Debug.Log(newDotPosition + "newDot");
	//		Debug.Log(lastDotPosition + "lastDot");
			if (newDotPosition != lastDotPosition)
			{
				MakeADot(newDotPosition);
			}
		}
	}
	void MakeADot(Vector3 newDotPosition)
	{
		Debug.Log ("we called MakeADot");
		Instantiate(DotPrefab, newDotPosition, Quaternion.identity); //use random identity to make dots looks more different
		if (lastPointExists)
		{
			GameObject colliderKeeper = new GameObject("collider");
			BoxCollider bc = colliderKeeper.AddComponent<BoxCollider>();
			colliderKeeper.transform.position = Vector3.Lerp(newDotPosition, lastDotPosition, 0.5f);
			colliderKeeper.transform.LookAt(newDotPosition);
			bc.size = new Vector3(0.1f, 0.1f, Vector3.Distance(newDotPosition, lastDotPosition));
		}
		lastDotPosition = newDotPosition;
		lastPointExists = true;
	}
}
