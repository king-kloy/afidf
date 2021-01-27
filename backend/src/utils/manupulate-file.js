import path from "path";
import shortid from "shortid";
import { createWriteStream, readFileSync, unlinkSync } from "fs";

const __dirname = path.resolve(path.dirname(""));

const storeUpload = async ({ stream, filename, mimetype }) => {
  const id = shortid.generate();
  const filePath = `${__dirname}/uploads/${id}-${filename}`;
  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(filePath))
      .on("finish", () => resolve({ id, filePath, filename, mimetype }))
      .on("error", reject)
  );
};

export const processUpload = async (upload) => {
  const { createReadStream, filename, mimetype } = await upload;
  const stream = createReadStream();
  const file = await storeUpload({ stream, filename, mimetype });
  return file;
};

export const convertFileToBuffer = (filePath, fileType) => {
  const data = readFileSync(filePath, "base64");

  // remove file on successful data
  if (data) unlinkSync(filePath);

  return `data:${fileType};charset=utf-8;base64,${data.toString()}`;
};
