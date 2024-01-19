import { Copy, CopyIcon } from 'lucide-react';
import React, { useContext, useState } from 'react';
import GlobalApi from './../../../../../_utils/GlobalApi';
import { useUser } from '@clerk/nextjs';
import Toast from '../../../../../_components/Toast';

function FileShareForm({ file, onPasswordSave }) {
  const [isPasswordEnable, setIsEnablePassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [toast, setToast] = useState();
  const { user } = useUser();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  const sendEmail = () => {
    setToast({
      status: 'Info',
      msg: 'Sending Email...!',
    });
    const data = {
      emailToSend: email,
      userName: user?.fullName,
      fileName: file.fileName,
      fileSize: file.fileSize,
      fileType: file.fileType,
      shortUrl: `${baseUrl}f/${file.shortUrl.split('/').pop()}`,
    };
    GlobalApi.SendEmail(data).then((resp) => {
      console.log(resp);
      setToast({
        status: 'success',
        msg: 'Email Sent Successfully!',
      });
    });
  };

  const onCopyClick = () => {
    if (file && file.shortUrl) {
      const completeUrl = `${baseUrl}f/${file.shortUrl.split('/').pop()}`;
      navigator.clipboard.writeText(completeUrl);
      setToast({
        status: 'Copied',
        msg: 'Url Copied!',
      });
    } else {
      console.error('File or file.shortUrl is undefined');
    }
  };

  return file && (
    <div className='flex flex-col gap-2'>
      <div>
        <label className='text-[14px] text-gray-500'>Short Url</label>
        <div className='flex gap-5 p-2 border rounded-md justify-between'>
          <input
            type="text"
            value={`${baseUrl}/f/${file.shortUrl.split('/').pop()}`}
            disabled
            className='disabled:text-gray-500 bg-transparent outline-none w-full'
          />
          <Copy
            className='text-gray-400 hover:text-gray-600 cursor-pointer'
            onClick={() => onCopyClick()}
          />
        </div>
      </div>
      <div className='gap-3 flex mt-5'>
        <input
          type='checkbox'
          defaultChecked={file.password !== ''}
          onChange={(e) => setIsEnablePassword(e.target.checked)}
        />
        <label>Enable Password?</label>
      </div>

      {isPasswordEnable ? (
        <div className='flex gap-3 items-center'>
          <div className='border rounded-md w-full p-2'>
            <input
              type="password"
              defaultValue={file.password}
              className='disabled:text-gray-500 bg-transparent outline-none'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className='p-2 bg-primary text-white rounded-md disabled:bg-gray-300 hover:bg-green-600'
            disabled={password?.length < 3}
            onClick={() => onPasswordSave(password)}
          >
            Save
          </button>
        </div>
      ) : null}

      <div className='border rounded-md p-3 mt-5'>
        <label className='text-[14px] text-gray-500'>Send File to Email</label>
        <div className='border rounded-md p-2'>
          <input
            type="email"
            placeholder='example@gmail.com'
            className='bg-transparent outline-none w-full'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          className='p-2 disabled:bg-gray-300 bg-primary text-white hover:bg-green-600 w-full mt-2 rounded-md'
          disabled={email?.length < 3}
          onClick={() => sendEmail()}
        >
          Send Email
        </button>
      </div>

      {toast?.status ? (
        <Toast toast={toast} closeToast={() => setToast(null)} />
      ) : null}
    </div>
  );
}

export default FileShareForm;