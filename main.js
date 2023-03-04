import { runScript } from "./share/tool";
import "./style.scss";

document.querySelector("head").innerHTML = `
    ${document.querySelector("head").innerHTML}

`;
document.querySelector("#app").innerHTML = `
<!-- 音乐 -->
<audio id="audio" autoplay="autoplay" loop>
      <source src="music/happy-birthday.mp3" type="audio/mp3" />
</audio>

	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<div class="pyro">
	<div class="before"></div>
	<div class="after"></div>
	</div>
	<h1>Safe, healthy and happy!</h1>
	<h2>Happy Birthday Dabao!</h2>
	<div class="birthday-container">
		<div class="candle">
		<div id="flame" class="lit"></div>
		</div>
		<div class="cake"></div>
		<div class="plate"></div>
	</div>
`;

window.addEventListener("load", function () {
  const music = document.querySelector("#audio");
  document.body.addEventListener("click", function () {
    if (music.paused) {
      music.play();
    }
  });

  const scripts = document.querySelector("#app").querySelectorAll("script");
  Array.prototype.slice.apply(scripts).reduce((chain, script) => {
    return chain.then(() => runScript(script));
  }, Promise.resolve());
});
