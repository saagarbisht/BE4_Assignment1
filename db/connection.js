import { connect } from "mongoose";

export default async function (url){
  await connect(url)
        .then(() => console.log("connected to database..."))
        .catch(() => console.log("unable to connect..."))
} 