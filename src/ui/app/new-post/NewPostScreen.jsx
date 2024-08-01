import {Button, CircularProgress} from "@mui/material";
import {useRef, useState} from "react"
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import {uploadFile} from "../../../data/firebase/firebaseStorage.js";
import {Form, redirect} from "react-router-dom";
import {postNewPost} from "../../../data/firebase/firebaseDatabase.js";

export const newPostAction = async ({request}) => {
  const formData = await request.formData()
  const post = {
    imageUrl: formData.get("imageUrl"),
    comment: formData.get("comment"),
  }
  await postNewPost(post)
  return redirect("/app/home")
}


const NewPostScreen = () => {
  const inputRef = useRef(null);

  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const triggerFilePicker = () => {
    inputRef.current?.click();
  }

  const uploadFileLocal = async (event) => {
    setUploading(true)
    const files = event.target.files;
    if (!files.length) {
      return null
    }
    const file = files[0]
    const downloadUrl = await uploadFile(file)
    setUploading(false)
    setImageUrl(downloadUrl)
  }

  return (
    <div className={"h-screen w-full flex flex-col gap-2 justify-center items-center"}>
        <button type={"button"} className={"w-1/2 h-96"} onClick={triggerFilePicker}>
           <div className={"w-full h-full flex justify-center items-center bg-white rounded-2xl"}>
             {uploading ?
               <CircularProgress/>
               :
               imageUrl ?
                   <img className={"w-full h-96 object-contain"} src={imageUrl} alt={""} />
                   :
             <AddAPhotoIcon className={"!size-32 text-blue-500"} />
             }
           </div>
        </button>
        <input type={"file"} className={"hidden"} accept={"image/*"} onChange={uploadFileLocal} ref={inputRef}/>
      <Form className={"w-full flex flex-col gap-2 items-center"} method={"post"}>
        <input type={"hidden"} name={"imageUrl"} value={imageUrl}/>
        <p className={"font-medium"}>Comment : </p>
        <textarea className={"resize-none w-96 h-24 p-2"} name={"comment"}/>
        <Button type={"submit"} className={"w-32"}>Post</Button>
      </Form>
    </div>
  )

}

export default NewPostScreen;