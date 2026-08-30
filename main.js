<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript 2</title>

    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
        }

        input {
            width: 110px;
        }

        button {
            cursor: pointer;
        }

        #tblRecords {
            border-collapse: collapse;
            margin: auto;
        }

        #tblRecords th,
        #tblRecords td {
            border-bottom: 1px solid black;
            padding: 6px 8px;
            text-align: center;
        }

        fieldset {
            width: 700px;
        }

        #status {
            color: red;
            font-size: 12px;
        }
    </style>
</head>

<body>

    <h1>Javascript Web Output #2</h1>

    <table id="tblInput">

        <tr>
            <td width="45%">
                <label for="txtFname">First Name:</label>
            </td>
            <td>
                <input type="text" id="txtFname">
            </td>
        </tr>

        <tr>
            <td>
                <label for="txtMname">Middle Name:</label>
            </td>
            <td>
                <input type="text" id="txtMname">
            </td>
        </tr>

        <tr>
            <td>
                <label for="txtLname">Last Name:</label>
            </td>
            <td>
                <input type="text" id="txtLname">
            </td>
        </tr>

        <tr>
            <td>
                <label for="txtAge">Age:</label>
            </td>
            <td>
                <input type="number" id="txtAge">
            </td>
        </tr>

        <tr style="height:20px;">
            <td></td>
            <td style="padding-top:15px;">
                <button id="btnInsertUpdate" value="insert">
                    Insert
                </button>

                <button id="btnClear">
                    Clear
                </button>
            </td>
        </tr>

    </table>

    <br>

    <fieldset>
        <legend>Records</legend>

        <p id="status"></p>

        <table id="tblRecords">
            <!-- Records will appear here -->
        </table>

    </fieldset>

    <button id="btnClearItems" style="margin-top:10px;">
        Clear Records
    </button>

    <label>Sort by:</label>

    <select id="sortBy">
        <option value="lname">Last Name</option>
        <option value="fname">First Name</option>
        <option value="age">Age</option>
    </select>

    <select id="sortOrder">
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
    </select>

    <button id="btnSave">
        Save to Local Storage
    </button>

    <script src="main.js"></script>

</body>
</html>