export function getFileExtention(file) {
  let name = file.split('.');
  return {
    name: name[0],
    ext: name[1],
  }
}