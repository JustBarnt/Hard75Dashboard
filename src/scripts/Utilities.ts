enum EntityMap 
{
		"&" = "&amp;",
		"<" = "&lt;",
		">" = "&gt;",
		"\"" = "&quot;",
		"'" = "&#39;",
		"/" = "&#x2F;",
		"`" = "&#x60;",
		"=" = "&#x3D;"
}

export class Utils
{
	/**
	* Replaces a potentially hazardous string with a normal string with no HTML.
	* @param {String} input - User input.
	* @return {String} A sanitized string.
	*/
	static SanitizeInput(input: string)
	{
		return String(input).replace(/[&<>"'`=\/]/g, (s) => 
		{
			return EntityMap[s];
		});
	}
}