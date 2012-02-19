<h1>Markimago - Linked Easily</h1>

Markimago allows you to type image path and webpage urls for your page only in one time. Then, when you want to apply it with
image or anchor tag, you could only type the identifier of the image urls you type before. So you don't need to type 
the url 2, 3, 4, or more times, just type once time, then call the bookmark. Easy and awesome, right?

<h1>Usage</h1>

<h3>Step 1 : Make the bookmarks</h3>
<pre>
	Markimago.createMarker({
		"img url bookmark name", "http://example.com/imageurl.png",
		"webpage url", "http://example.org/"
	});
</pre>

<h3>Step 2 : Apply to all image and anchor elements</h3>
<pre>
	Markimago.mark(options);
</pre>

<br />
Available options:
<ul>
	<li>title : boolean<br />
		If the value is <b>true</b>, the title property
		in image or anchor tag will automatically generated from
		bookmark name.</li>
	<li>alt : boolean<br />
		If the value is <b>true</b>, the alt property
		in img tag (only img) will automatically generated from
		bookmark name.</li>
</ul>
<h3>Step 3 : Call bookmark with name property</h3>
<pre>
	&lt;img name="bookmark name" /&gt;        
        
    &lt;a name="bookmark name"&gt;Any Website&lt;/a&gt;
</pre>


<p>That's all. For example, you can read the <b>index.html</b>
source code. Thanks!</p>

<br />
Made by : <b>Nathaniel Mannawi</b>