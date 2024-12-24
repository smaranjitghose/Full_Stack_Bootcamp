HTML

```
<!DOCTYPE html>
<html>
<head>
    <title>Image Classification</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.4/p5.js"></script>
    <script src="https://unpkg.com/ml5@1/dist/ml5.min.js"></script>
</head>
<body>
    <h1>Image Classification</h1>
    <div id="myResult">Scanning ...</div>
    <img id="myImage" src="./bird.jpg" width="100%">
    
    <script src="script.js"></script>
</body>
</html>
```

Script

```
let classifier;
let img;

classifier = ml5.imageClassifier("MobileNet");
img = document.getElementById("myImage");
classifier.classify(img, gotResult);

function gotResult(results) {
    // Display the results
    console.log(results)
    let label = results[0].label;
    let confidence = (results[0].confidence * 100).toFixed(2);
    document.getElementById("myResult").innerHTML = label + "<br>Confidence: " + confidence + "%";
}
```


