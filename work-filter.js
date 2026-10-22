const slider = document.querySelector('#work-filter');
const filter = document.querySelector('.work-filter');
const buttons = [...document.querySelectorAll('.filter-labels button')];
const projects = [...document.querySelectorAll('.work .project')];
const audioRegister = document.querySelector('#audio-register');
const audioEntryCount = audioRegister?.querySelectorAll('.audio-project-list li').length ?? 0;
const status = document.querySelector('#filter-status');

function showCategory(index) {
  const button = buttons[index];
  const category = button.dataset.filter;
  const label = button.textContent.trim();
  let visibleCount = 0;

  slider.value = index;
  slider.setAttribute('aria-valuetext', label);
  filter.style.setProperty('--route-progress', `${index * 25}%`);

  buttons.forEach((item, itemIndex) => {
    item.setAttribute('aria-pressed', String(itemIndex === index));
  });

  projects.forEach((project) => {
    project.hidden = category !== 'all' && project.dataset.category !== category;
    project.classList.remove('project--first-visible');
    if (!project.hidden) visibleCount += 1;
  });

  projects.find((project) => !project.hidden)?.classList.add('project--first-visible');
  audioRegister.hidden = category !== 'all' && category !== 'audio';
  audioRegister.open = category === 'audio';
  status.textContent = category === 'audio'
    ? `Showing ${audioEntryCount} audio project entries.`
    : category === 'all'
      ? `Showing ${visibleCount} projects and the audio project archive.`
      : `Showing ${visibleCount} projects: ${label}.`;
}

slider.addEventListener('input', () => showCategory(Number(slider.value)));
buttons.forEach((button, index) => {
  button.addEventListener('click', () => showCategory(index));
});

showCategory(0);
