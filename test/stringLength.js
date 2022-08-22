function stringLength(string){

  const MAX_LENGTH = 10;
  const MIN_LENGTH = 1;

  if((string.length < MIN_LENGTH )||(string.length > MAX_LENGTH ))
  return 'error - character length too short';

  return string.length;
}

module.exports = stringLength;
