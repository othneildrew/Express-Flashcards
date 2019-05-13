(function() {

  const content = document.getElementById('content');
  const hint = document.getElementById('hint');
  const button = document.createElement('button');
  button.innerHTML = 'Show Hint';

  // Hide the hint by default
  if (hint) {
    hint.style.display = 'none';

    // Add show hint button
    button.addEventListener('click', showHint);
    content.append(button);
  }

  function showHint() {
    button.style.display = 'none';
    hint.style.display = 'block';
  }
})();
