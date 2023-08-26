<script>
    import './test.css';
</script>


<!-- svelte-ignore a11y-missing-attribute -->
<html>
<head>
  <style>
    body {
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      height: 100vh;
      overflow: auto;
    }

    .events-container {
      display: flex;
      flex: 1;
      width: 100%;
    }

    .left-container {
      display: flex;
      flex-direction: column;
      width: 30%;
      background-color: #f0f0f0;
      padding: 20px;
    }

    .right-container {
      display: flex;
      flex-direction: column;
      width: 70%;
      background-color: #ccc;
      padding: 20px;
    }

    .events_description {
      flex: 1;
      background-color: #fff;
      margin: 10px 0;
      padding: 20px;
      display: flex;
      flex-direction: row;
    }

    .column {
      flex: 1;
      padding: 0 10px;
    }

    .logo-container {
      display: flex;
      width: 100%;
      background-color: black;
      color: white;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    .split-boxes {
      display: flex;
      width: 100%;
    }

    .split-box {
      flex: 1;
      background-color: #ccc;
      padding: 20px;
      margin: 5px;
    }

    .input-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

  .header {
    background-color: white;
    color: black;
    padding: 20px;
  }

  .footer {
    background-color: black;
    color: white;
    padding: 2px;
  }

  .content {
    flex: 1;
    overflow-y: auto; /* Enable vertical scrolling */
    padding: 20px;
  }
  </style>
</head>
<body>
  <div class="header">
    <p>fugma</p>
  </div>
  <div class="content">
    <div class="split-boxes">
      <div class="split-box">
        <p>Create Event</p>
          <div class="column">
            <ul>
              <li>People to People</li>
              <li>People to Group</li>
              <li>People to Project</li>
            </ul>
          </div>
          <button type="button">Learn more about Event Types</button>
      </div>
      <div class="split-box">
        <p>Join Event</p>
        <p>Enter Event Code</p>
        <div class="input-container">
          <input type="text" placeholder="Enter something">
          <button type="submit">Submit</button>
          <button type="button">Find active events</button>
        </div>
      </div>
    </div>
    <div class="events-container">
      <div class="left-container">
        <div class="left-box">
          <p>Event Types</p>
        </div>
      </div>
      <div class="right-container">
        <div class="events_description">
          <div class="column">
            <h2>People to People</h2>
          </div>
          <div class="column">
            <ul>
              <li>Dating</li>
              <li>Conversations</li>
              <li>And many more!</li>
            </ul>
          </div>
        </div>
        <div class="events_description">
          <div class="column">
            <h2>People to Group</h2>
          </div>
          <div class="column">
            <ul>
              <li>Social Sport</li>
              <li>Hackathos ;)</li>
              <li>And many more!</li>
            </ul>
          </div>
        </div>
        <div class="events_description">
          <div class="column">
            <h2>People to Project</h2>
          </div>
          <div class="column">
            <ul>
              <li>Industry Nights</li>
              <li>Capstone Projects</li>
              <li>And many more!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <div class="logo-container">
      <p>fugma</p>
    </div>
  </div>
</body>
</html>
