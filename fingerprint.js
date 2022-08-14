function fingerprint() {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var txt = 'i9asdm..$#po((^@KbXrww!~cz';
    ctx.textBaseline = "top";
    ctx.font = "16px 'Arial'";
    ctx.textBaseline = "alphabetic";
    ctx.rotate(.05);
    ctx.fillStyle = "#f60";
    ctx.fillRect(125,1,62,20);
    ctx.fillStyle = "#069";
    ctx.fillText(txt, 2, 15);
    ctx.fillStyle = "rgba(102, 200, 0, 0.7)";
    ctx.fillText(txt, 4, 17);
    ctx.shadowBlur=10;
    ctx.shadowColor="blue";
    ctx.fillRect(-20,10,234,5);
    var strng=canvas.toDataURL();

document.body.appendChild(canvas);    
    
    var hash=0;
    if (strng.length==0) return 'nothing!';
    for (i = 0; i < strng.length; i++) {
		char = strng.charCodeAt(i);
		hash = ((hash<<5)-hash)+char;
		hash = hash & hash;
	}
	return hash;
}

const hash = document.getElementById('hash');
hash.innerHTML = fingerprint();

//('#number').html(fingerprint());
//('#MimeType').html(navigator.mimeTypes[4].type);
//('#colorDepth').html(screen.colorDepth);
//('#pixelDepth').html(screen.pixelDepth);

console.log(screen);

