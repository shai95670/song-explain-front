const limitTextLength = (text) => {
    return text.length > 24 ? `${text.slice(0, 24)}...` : text;
};

export {
  limitTextLength
};