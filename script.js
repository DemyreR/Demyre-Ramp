function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openPowerpointWindow1() {
  var powerpointWindow = window.open('', '_blank');
  var powerpointContent = `
    <style>
      body, html {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
      iframe {
        width: 100%;
        height: 100%;
        border: none;
      }
    </style>
	<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ0E2lJnYAg2hAsb6WwCd8_0VDVdOJ2doIYNFLuRqLS0hkB8daFaW0c5r5RjiVRvQ/embed?start=false&loop=false&delayms=3000" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
  `;
  powerpointWindow.document.write(powerpointContent);
}

function openPowerpointWindow2() {
  var powerpointWindow = window.open('', '_blank');
  var powerpointContent = `
    <style>
      body, html {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
      iframe {
        width: 100%;
        height: 100%;
        border: none;
      }
    </style>
	<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSP6fLQvfKEx-Hbx-XNN3-oGbDA93dqsFvxDKYw5A9AbMsZKKc3hnqb79fmLzDQOg/embed?start=false&loop=false&delayms=3000" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
  `;
  powerpointWindow.document.write(powerpointContent);
}

function openPowerpointWindow3() {
  var powerpointWindow = window.open('', '_blank');
  var powerpointContent = `
    <style>
      body, html {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
      iframe {
        width: 100%;
        height: 100%;
        border: none;
      }
    </style>
	<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSYdxzo8mrytOMxqPUmB-QcGac9fk-95qzhEXl443swI5GxkGaVzjf9RtVTA4rHNQ/embed?start=false&loop=false&delayms=3000" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
  `;
  powerpointWindow.document.write(powerpointContent);
}
