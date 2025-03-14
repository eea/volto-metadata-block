export const mapTokensToLabels = (tokensArray = [], users = []) =>
  tokensArray.map((token) => {
    const user = users.find((user) => user.value === token);
    return user ? user.label : token;
  });
