<html>
<head>
    <link rel="stylesheet" href="css/bincomcss.css">
    <script src="javascripts/jquery.js"></script>
    <script src="javascripts/controller.js"></script>
</head>
<body>
<h2>BINCOM TEST</h2>
<div id="states">
    <span><a href="views/lga.php">Question 2>>></a></span><br>
    <span><a href="views/upload-poll-result.php">Question 3>>></a></span><br>
    <h4> Delta States Poll Result</h4>
    <ul id = "state-list"</ul>
</div>
<div id = "lgas">
    <h4>Local Governments</h4>
    <ul id="lga-list"></ul>
</div>
<div id = "wards">
    <h4>Wards in </h4>
    <ul id="ward-list"></ul>
</div>
<div id = "units">
    <h4>Polling Units in </h4>
    <ul id="poll-list"></ul>
</div>
<div id = "result">
    <h4>Result For Units in </h4>
    <div id="result-pane">
        <table>
            <thead>
            <th>Party Name</th>
            <th>Score</th>
            </thead>
            <tbody id="result-body">

            </tbody>
        </table>
    </div>
</div>
</body>
</html>