import { Utils } from "./Utilities";
import { V3 } from "../../node_modules/paseto/types/index";
const generateKey = V3.generateKey;

type Token = Promise<{ secretKey: string, publicKey: string }>;

/**
* Class for creating a User Account. On successful creation user is assigned a Paseto token.
*/
class CreateUser
{
	private firstName: string;
	private lastName: string;
	private username: string;
	private email: string;
	private token:Token;

	constructor(firstName:string, lastName:string, username:string, email:string)
	{
		this.firstName = Utils.SanitizeInput(firstName);
		this.lastName = Utils.SanitizeInput(lastName);
		this.username = Utils.SanitizeInput(username);
		this.email = Utils.SanitizeInput(email);
		this.token = generateKey("public", { format: "paserk" });

		SendCreateUserRequest(this.firstName, this.lastName, this.username, this.email, this.token);
	}

	private SendCreateUserRequest(firstName:string, lastName:string, username:string, email:string, token:Token )
	{
		/* 
			Send user to MSSQL Server through rest api.
		*/
	}
}

