const requiredValidor = async (...localFilePath) => {
  try {
    const avoidData = localFilePath[1];
    for (let key in localFilePath[0]) {
      const avoidDataCheck = avoidData.indexOf(key) !== -1;
      if(!avoidDataCheck){
        if (!localFilePath[0][key]) {
          return `Field is required ${key}`;
        }
      }
     
    }
    return null;
  } catch (error) {
    
  }
}

export { requiredValidor }