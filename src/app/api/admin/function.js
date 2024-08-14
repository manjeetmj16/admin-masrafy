export const getNextDocumentNumber = async(number) => {
    let nextNum = parseInt(number, 10) + 1;
    nextNum = nextNum.toString().padStart(number.length, '0');
    return nextNum;
  }