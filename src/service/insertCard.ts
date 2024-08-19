import request from "../tool/request";

export const getAllType = async () => {
  return await request.get("/api/category");
};

export const addType = (type: string) => {
  return request.post("/api/category", {
    params: {
      type,
    },
  });
};
