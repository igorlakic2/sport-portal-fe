const axiosConfig = <P>(/*_token?: string, */ params?: P) => {
  return {
    headers: {
      //   Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    params: params ? params : {},
  };
};

export { axiosConfig };
