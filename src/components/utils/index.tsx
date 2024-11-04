export function handleCommaForQuery(string: string){
    if(string){
      return string.replace(/,/g, '|');
    }
    return ""
  }
