import React, { useState } from 'react';
import FilePreview from './FilePreview';
import ProgressBar from './ProgressBar';
import AlertMsg from './AlertMsg';

function UploadForm({ uploadBtnClick, progress }) {
    const [file, setFile] = useState();
    const [errorMsg, setErrorMsg] = useState();

    const onFileSelect = (file) => {
        console.log(file);
        if (file && file.size > 2000000) {
            console.log("Size is greater than 2 MB");
            setErrorMsg('Maximum File Upload Size is 2MB');
            return;
        }
        setErrorMsg(null);
        setFile(file);
    };

    return (
        <div className='text-center'>

            <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-green-300 border-dashed rounded-lg cursor-pointer bg-green-50 dark:hover:bg-green-800 dark:bg-green-700 hover:bg-green-100 dark:border-green-600 dark:hover:border-green-500 dark:hover:bg-green-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-12 h-12 mb-4 text-green-500 dark:text-black-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className="mb-2 text-lg md:text-2xl text-black-500 dark:text-black-400">
                            <span className="font-semibold">Click to upload </span>
                            or <strong className='text-primary'>drag</strong> and <strong className='text-primary'>drop</strong></p>
                        <p className="text-xs text-black-500 dark:text-black-400">SVG, PNG, JPG, GIF, M4A, MP3, MP4, EXE, RAR, ZIP ( Max Size: 2MB)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" onChange={(event) => { onFileSelect(event.target.files[0]) }} accept=".svg,.png,.jpg,.jpeg,.gif,.m4a,.mp3,.mp4,.exe,.rar,.zip" />
                </label>
            </div>
            {errorMsg ? <AlertMsg msg={errorMsg} /> : null}
            {file ? <FilePreview file={file} removeFile={() => setFile(null)} /> : null}

            {progress > 0 ? <ProgressBar progress={progress} /> :
                <button disabled={!file} className='p-2 bg-primary text-black w-[30%] rounded-full mt-5 disabled:bg-gray-400' onClick={() => uploadBtnClick(file)}>Upload</button>}

        </div>
    )
}

export default UploadForm;
