// blog
const $postText = document.querySelectorAll('.blog-post-text'),
$postBtn = document.querySelectorAll('.btn-leer-mas');
var postTextBackUp = [],
postTextNew = [],
postTextCount= [];
postTextIndex = 0,
postTextIndexCount = 0,
postBtnCount = [];

// blog
for(let i of $postText){
	if (i.innerHTML.length > 180) {
		postTextCount[postTextIndexCount] = postTextIndex;
		postBtnCount[postTextIndex] = 0;
		postTextBackUp[postTextIndex] = i.innerHTML;
		postTextNew[postTextIndex] = postTextBackUp[postTextIndex].slice(0, 180)+'...';
		i.innerHTML = postTextNew[postTextIndex];
		postTextIndexCount++;
	}else{
		$postBtn[postTextIndex].style.display = 'none';
	}
	postTextIndex++;
}

for(let i of postTextCount){
	$postBtn[i].addEventListener('click', function(){
		if (postBtnCount[i] == 0) {
			$postText[i].innerHTML = postTextBackUp[i];
			$postBtn[i].innerHTML = 'Leer Menos';
			postBtnCount[i]++;
		}else{
			$postText[i].innerHTML = postTextNew[i];
			$postBtn[i].innerHTML = 'Leer Mas';
			postBtnCount[i]--;
		}
	});
}