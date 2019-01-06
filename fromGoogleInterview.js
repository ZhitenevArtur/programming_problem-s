//FROM HERE https://www.youtube.com/watch?v=10WnvBk9sZc
//https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/

/*-----------------------------------------------------*/
/*

Write a function that takes two strings, s1 and s2 
and returns the longest common subsequence of s1 and s2

"ABAZDC", "BACBAD" => "ABAD"
"GXTXAYB", "AGGTAB" => "GTAB"
"aaaa", "aa" => "aa"

*/

// s1 = "ABAZDC";
// s2 = "BACBAD";

// s1 = "GXTXAYB";
// s2 = "AGGTAB";

// s1 = "aaaa";
// s2 = "aa";

// s1 = "";
// s2 = "...";

s2 = "ABCABA";
s1 = "ABBA";

result = "";
lastSeen = 0;
j=0;


if(s2.length>s1.length){
	var temp = s2;
	s2=s1;
	s1=temp;
}

if(s1.indexOf(s2, 0)!=-1){
	result = s2;
}

else{
	for (var i = 0; i < s1.length; i++) {
		for (j; j < s2.length; j++) {
			if(s1[i]==s2[j]){
				result+=s1[i];
				lastSeen = j+1;
				break;
			}
		}
		j = lastSeen;
	}
}

alert(result);