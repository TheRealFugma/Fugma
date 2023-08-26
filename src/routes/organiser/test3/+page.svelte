<script>
    import './test.css';
</script>


<!-- svelte-ignore a11y-missing-attribute -->
<html>
<head>
  <style>
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
    <div class="logo-container">
      <p>fugma</p>
    </div>
  </div>
</body>
</html>
