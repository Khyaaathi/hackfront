export function space(event: any) {
  if (event.target.selectionStart === 0 && event.code === 'Space') {
    event.preventDefault();
  }
}
