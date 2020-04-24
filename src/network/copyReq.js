export function funDownload(content, filename) {
	let cont = JSON.stringify(content);
	// 创建隐藏的可下载链接
	var eleLink = document.createElement('a');
	eleLink.download = filename;
	eleLink.style.display = 'none';
	// 字符内容转变成blob地址
	var blob = new Blob([cont]);
	eleLink.href = URL.createObjectURL(blob);
	// 触发点击
	document.body.appendChild(eleLink);
	eleLink.click();
	// 然后移除
	document.body.removeChild(eleLink);
};

// // 调用
// let data;
// funDownload(data,'homeData');
