const fetchFunction = async (page, query) => {
  const response = await fetch(
    `https://api.example.com/data?page=${page}&query=${query}`,
  );
  const result = await response.json();
  return result.data; // Adjust this based on the actual structure of your API response
};

const isNetworkError = (error: any): boolean => {
  return (
    'error' in error &&
    error?.error?.toString() === 'TypeError: Network request failed'
  );
};
/**
 * Handle all kind of ws errors (network)
 * @param error - Error to handle it can be an error (throwed by WS) or error throwed in handle logic
 * @returns {string} - Returns the error message
 */
export const handleError = (error: Error | unknown): string => {
  if (isNetworkError(error)) {
    return 'network error';
  } else return 'something went wrong ';
};
