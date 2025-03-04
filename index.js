function addingEventListener() {
    // Select the button element by ID
    const input = document.getElementById('button');
  
    // Define the callback function
    function clickAlert() {
      alert('I was clicked!');
    }
  
    // Attach the event listener
    input.addEventListener('click', clickAlert);
  }
  