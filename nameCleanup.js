function getName(type, fullname){
  function cleanName(fullname){
    return fullname.replace(/,.+/, '').replace(/\(|\)|"|\s*\b[jJ][rR]\b.*|\s*\b[sS][rR]\b.*|\s*\bIi\b.*|\s*\bIii\b.*|\s*\bIv\b.*|\s+$/g, '').replace(/\.$/, '');
  }
  function fixCase(fullname){ 
    return fullname.replace(/\w\S*/g, function(txt){
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  function getFirstName(fullname){
  	return /^\w+\.\s+\w+(?=\s)|^\S+(?=\s)/.exec(cleanName(fullname));
  }
  function getLastName(fullname){
  	return /\w*'\w*$|\w*-\w*$|\w+$/.exec(cleanName(fullname));
  }
  if(type == "first"){
    return getFirstName(cleanName(fixCase(fullname)));
  }
  if(type == "last"){
    return getLastName(cleanName(fixCase(fullname)));
  }
}

