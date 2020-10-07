<h1>Markimago - Linked Easily</h1>

Markimago allows you to <b>load resources</b> for your page only in one time. Then, when you want to apply them with
their <b>tags</b>, you could only type the bookmark name you defined before. So you don't need to type 
the urls multiple times. Just type it once time, then call the bookmark. Simply awesome.

<h1>Usage</h1>

<h3>Step 1 : Make the bookmarks</h3>
<pre>
	Markimago.createMarker({
		"img url bookmark name" : "http://example.com/imageurl.png",
		"webpage url" : "http://example.org/",
                "jsfile" : "http://example.org/example.js",
                "cssfile" : "http://example.org/example.css"
	});
</pre>

<h3>Step 2 : Apply to all ELEMENTS which are supported =P</h3>
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
	<img name="bookmark name" />        
        
	<a name="bookmark name">Any Website</a>;
	<script name="bookmark name"></script>
	<link rel="linkrel" name="bookmark name" type="linktype"/>
</pre>


<p>That's all. For example, you can read the <b>index.html</b>
source code. Thanks!</p>
